const usermodel = require('../models/user.model.js');

const getAllUserController=(req,res,next)=>{
    usermodel.find()
            .then(data=>{
                res.status(200).json({
                    message:'All User',
                    userlist:data
                })
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while finding the User."
                });
            })
}

const postuser = (req, res,next) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    const User = new usermodel({
        UserName: req.body.UserName || "Untitled User",
        Email: req.body.Email || "Email", 
        DeptId: req.body.DeptId,
        Password:req.body.Password
    });

    // Save User in the database
    User.save()
    .then(data => {
        res.status(201).json({
            message:'User Added',
            usersave:data
        //res.send(data);
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}

const getUserbyId=(req,res,next)=>{
    var idtext=req.params._Id;
    console.log(idtext);
    usermodel.findById(req.params._Id,function(err,usermodel){
        if(err) return next(err);
        res.send(usermodel);
    })
}

const deleteUserbyId=(req,res,next)=>{
    var idtext=req.params._Id;
    console.log(idtext);
    usermodel.findByIdAndRemove(req.params._Id,function(err,usermodel){
        if(err) return next(err);
        res.send(usermodel+"Deleted successfully");
    })
}

const userupdatebyId=(req,res,next)=>{
    var userid=req.params._Id;
    usermodel.findByIdAndUpdate(userid,{$set: req.body},function(err,usermode){
        if(err) return next(err);
        res.send("Updated successfully")
    })
}

// const deleteUserbyId = function (req, res) {
//     usermodel.findByIdAndRemove(req.params._Id, function (err) {
        
// if (err) return next(err);
//         res.send('Deleted successfully!');
//     })
// };

// exports.user_details = function (req, res) {
//     User.findById(req.params.id, function (err, user) {
//         if (err) return next(err);
//         res.send(user);
//     })
// };

// const User = require('../models/user.model.js');

// // Create and Save a new User
// exports.create = (req, res) => {
//     // Validate request
//     if(!req.body.content) {
//         return res.status(400).send({
//             message: "User content can not be empty"
//         });
//     }

//     // Create a User
//     const User = new User({
//         UserName: req.body.UserName || "Untitled User",
//         Email: req.body.Email || "Email", 
//         Password: req.body.Password
//     });

//     // Save User in the database
//     User.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the User."
//         });
//     });
// };

// // Retrieve and return all users from the database.
// exports.findAll = (req, res) => {

// };

// // Find a single User with a userId
// exports.findOne = (req, res) => {

// };

// // Update a User identified by the userId in the request
// exports.update = (req, res) => {

// };

// // Delete a User with the specified userId in the request
// exports.delete = (req, res) => {

// };
module.exports={postuser,getAllUserController,getUserbyId,deleteUserbyId,userupdatebyId}

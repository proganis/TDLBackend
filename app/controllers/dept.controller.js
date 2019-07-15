const Department=require('../models/dept.model');

const getAllDeptController=(req,res,next)=>{
    Department.find()
            .then(data=>{
                res.status(200).json({
                    message:'All Dept',
                    department:data
                })
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while finding the Dept."
                });
            })
}

const postnewDeptController=(req,res,next)=>{
    // Create a User
    console.log(req.body);
    console.log(req.body.content);
    console.log(req.body.DeptName);
    if(!req.body) {
        return res.status(400).send({
            message: "Dept content can not be empty"
        });
    }

    // Create a User
    const dept = new Department({
        DeptName: req.body.DeptName || "MKT",
    });

    // Save User in the database
    dept.save()
    .then(data=>{
        res.status(201).json({
            message:'Dept Added',
            Department:data
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Dept."
        });
    });
}
module.exports={getAllDeptController,postnewDeptController}
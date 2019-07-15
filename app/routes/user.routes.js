const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/user.controller');

//post a user
router.post('/createuser',usercontroller.postuser)

// get all user
router.get('/',usercontroller.getAllUserController)

// Retrieve a single user with userId
router.get('/:_Id', usercontroller.getUserbyId)

// Delete a User with UserId
router.delete('/:_Id/delete', usercontroller.deleteUserbyId)

//Update a User
router.put('/:_Id/update',usercontroller.userupdatebyId)


//These are for example
router.delete('/:id',(req,res,next)=>{
    res.status(201).json({message:'I am delete Route'})
})
router.put('/:id',(req,res,next)=>{
    res.status(201).json({message:'I am put Route'})
})

module.exports = router;


// a simple test url to check that all of our files are communicating correctly.

//router.get('/test', product_controller.test);
//router.get('/test', users.test);
//router.post('/create', users.create);
//router.get('/test', users.test);
//router.get('/:UserId',users.user_details);
// router.post('/',(req,res,next)=>{

//     const user=new User({
//         UserId:req.body.UserId,
//         UserName: req.body.UserName,
//         Email: req.body.Email, 
//         DeptId: req.body.DeptId,
//         Password:req.body.Password
//     })
//     user.save()
//         .then(data=>{
//             res.status(201).json({
//                 message:'User Added',
//                 user:data
//             })
//         })
//         .catch(err=>console.log(err))
//     // const namme=req.body.name
//     // const email=req.body.email
//     // res.status(201).json({message:'I am Post Route',name,email})
// })

// app.get('/', (req, res)=> {
//     res.send('Hello Worldaa!')
//   })

// app.get('/api/user',(req,res,next)=>{
//     res.json(contacts);
// })
// app.post('/',(req, res,next)=> {
//     res.send('Got a POST request')
// })

// app.put('/user', (req, res)=> {
//     res.send('Got a PUT request at /user')
//   })

//   app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
//   })
// module.exports = (app) => {
//     const users = require('../controllers/user.controller.js');

//     // Create a new user
//     app.post('/users',users.create);

//     // Retrieve all users
//     app.get('/users', users.findAll);

//     // Retrieve a single user with userId
//     app.get('/users/:userId', users.findOne);

//     // Update a user with userId
//     app.put('/users/:userId', users.update);

//     // Delete a user with userId
//     app.delete('/users/:userId', users.delete);
// }


// module.exports = (app) => {
//     const notes = require('../controllers/note.controller.js');

//     // Create a new Note
//     app.post('/notes', notes.create);

//     // Retrieve all Notes
//     app.get('/notes', notes.findAll);

//     // Retrieve a single Note with noteId
//     app.get('/notes/:noteId', notes.findOne);

//     // Update a Note with noteId
//     app.put('/notes/:noteId', notes.update);

//     // Delete a Note with noteId
//     app.delete('/notes/:noteId', notes.delete);
// }
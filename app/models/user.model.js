const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    UserName: String,
    Email: String,
    DeptId:Number,
    Password:String
});

module.exports = mongoose.model('User', UserSchema);

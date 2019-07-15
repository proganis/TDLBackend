const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const DeptSchema = mongoose.Schema({
    DeptName: String
});

// const Dept=mongoose.model('Dept',DeptSchema);
// module.exports=Dept;

module.exports = mongoose.model('dept', DeptSchema);
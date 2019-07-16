const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    ContactName: String,
    MobileNo1:String,
    MobileNo2:String,
    Email: String,
    Source:String,
    ContactStatus:String,
    AreaName: String,
    FlatSize:String,
    Budget:Number,
    ReadyStatus: String,
    HODate:Date,
    ForWhom:String,
    Purpose:String,
    FinanceBy:String
});

module.exports = mongoose.model('Contact', ContactSchema);

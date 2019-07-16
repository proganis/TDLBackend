const Contactmodel = require('../models/contact.model');

const getAllContact=(req,res,next)=>{
    Contactmodel.find()
            .then(data=>{
                res.status(200).json({
                    message:'All Contact',
                    Contactlist:data
                })
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while finding the Contact."
                });
            })
}

const postContact = (req, res,next) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Contact content can not be empty"
        });
    }
    const Contactdata = new Contactmodel({
        ContactName: req.body.ContactName,
        MobileNo1:req.body.MobileNo1,
        MobileNo2:req.body.MobileNo2,
        Email: req.body.Email,
        Source:req.body.Source,
        ContactStatus:req.body.ContactStatus,
        AreaName: req.body.AreaName,
        FlatSize:req.body.FlatSize,
        Budget:req.body.Budget,
        ReadyStatus: req.body.ReadyStatus,
        HODate:req.body.HODate,
        ForWhom:req.body.ForWhom,
        Purpose:req.body.Purpose,
        FinanceBy:req.body.FinanceBy
    });

    // Save Contact in the database
    Contactdata.save()
    .then(data => {
        res.status(201).json({
            message:'Contact Added',
            Contactsave:data
        //res.send(data);
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Contact."
        });
    });
}

const getContactbyId=(req,res,next)=>{
    var idtext=req.params._Id;
    console.log(idtext);
    Contactmodel.findById(req.params._Id,function(err,Contactmodel){
        if(err) return next(err);
        res.send(Contactmodel);
    })
}

const deleteContactbyId=(req,res,next)=>{
    var idtext=req.params._Id;
    console.log(idtext);
    Contactmodel.findByIdAndRemove(req.params._Id,function(err,Contactmodel){
        if(err) return next(err);
        res.send(Contactmodel+"Deleted successfully");
    })
}

const ContactupdatebyId=(req,res,next)=>{
    var Contactid=req.params._Id;
    Contactmodel.findByIdAndUpdate(Contactid,{$set: req.body},function(err,Contactmode){
        if(err) return next(err);
        res.send("Updated successfully")
    })
}
module.exports={postContact,getAllContact,getContactbyId,deleteContactbyId,ContactupdatebyId}
//module.exports={getAllContact,getContactbyId,deleteContactbyId,ContactupdatebyId}

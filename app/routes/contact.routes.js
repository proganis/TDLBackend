const express = require('express');
const router = express.Router();

const contactcontroller = require('../controllers/contact.controller');

//post a contact
router.post('/createcontact',contactcontroller.postContact)

// get all contact
router.get('/',contactcontroller.getAllContact)

// Retrieve a single contact with contactId
router.get('/:_Id', contactcontroller.getContactbyId)

// Delete a contact with contactId
router.delete('/:_Id/delete', contactcontroller.deleteContactbyId)

//Update a contact
router.put('/:_Id/update',contactcontroller.ContactupdatebyId)

module.exports = router;
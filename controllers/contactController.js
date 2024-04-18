const asyncHandler  = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


//@desc Create New contacts
//@route POST /api/contacts
//@access public


const createContact = asyncHandler( async(req, res) =>{
    console.log("The request body is ", req.body);
    const {name , email, phone} = req.body;
    if( !name || !email || !phone){
        res.status(400);
        throw new Error("All feilds are mandatory !") 
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact);
});

//@desc get  contacts
//@route GET /api/contacts/:id
//@access public


const getContact = asyncHandler(async(req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if( !contact){
        res.status(404);
        throw new Error("Contact not found ");
    }
    res.status(201).json(contact);
});

//@desc update  contacts
//@route PUT /api/contacts/:id
//@access public


const updateContact = asyncHandler(async(req, res) =>{

    const contact = await Contact.findById(req.params.id);
    if(!contact ){
        res.status(404);
        throw new Error("Contact Not Found");

    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.status(201).json(updatedContact);
});


//@desc delete  contacts
//@route DELETC /api/contacts/:id
//@access public


const deleteContact = asyncHandler(async(req, res) =>{
const contact = await Contact.findById(req.params.id);
if(!contact){
    res.status(404);
    throw new Error("Not able to delete some error is occured");
}

await Contact.deleteOne();
res.status(200).json(contact);

});


module.exports = {

    getContacts,
    getContact,
    updateContact,
    deleteContact,
    createContact
};
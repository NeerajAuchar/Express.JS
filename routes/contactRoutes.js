const express = require("express");
const router = express.Router();
const { getContacts,
    getContact,
    updateContact,
    deleteContact,
    createContact}= require("../controllers/contactController")


router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router; 
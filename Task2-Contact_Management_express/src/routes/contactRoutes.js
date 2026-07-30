// IMPORT
const express = require("express");
const { createContact, getContacts, getContactById, updateContact, deleteContact, getContactsPagination, sortContacts, searchContacts } = require("../controllers/contactController");
const {validateContact, validateId} = require ("../middleware/validation");
// router.get ETC
const router = express.Router();

// ROUTES
router.post("/", validateContact, createContact);
router.get("/", getContacts);
router.get("/search", searchContacts);
router.get("/sort", sortContacts);
router.get("/pagination", getContactsPagination);
router.get("/:id", validateId, getContactById);
router.put("/:id", validateId, validateContact, updateContact);;
router.delete("/:id",validateId, deleteContact);

// SHARE
module.exports = router; 
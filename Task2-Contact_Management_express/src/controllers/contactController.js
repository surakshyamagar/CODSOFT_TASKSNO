const prisma = require("../config/db");


// CREATE CONTACT
const createContact = async (req, res) => {
    try {

        const {
            name,
            email,
            phone,
            address,
            company,
        } = req.body;

        const existingContact = await prisma.contact.findUnique({
            where: { email },
        });

        if (existingContact) {
            return res.status(400).json({
                message: "A contact with this email already exists",
            });
        }

        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                phone,
                address,
                company,
            },
        });

        res.status(201).json({
            message: "Contact created successfully",
            data: contact,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }
};


// GET ALL CONTACTS
const getContacts = async (req, res) => {

    try {

        const contacts = await prisma.contact.findMany();

        res.status(200).json({
            message: "Contacts fetched successfully",
            data: contacts,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }

};


// GET CNTACT BY ID
const getContactById = async (req, res) => {

    try {

        const id = req.params.id;

        const contact = await prisma.contact.findUnique({
            where: { id },
        });

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found",
            });
        }

        res.status(200).json({
            message: "Contact fetched successfully",
            data: contact,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }

};


// UPDATE CONTACT
const updateContact = async (req, res) => {

    try {

        const id = req.params.id;

        const {
            name,
            email,
            phone,
            address,
            company,
        } = req.body;

        const existingContact = await prisma.contact.findUnique({
            where: { id },
        });

        if (!existingContact) {
            return res.status(404).json({
                message: "Contact not found",
            });
        }

        const emailExists = await prisma.contact.findFirst({
            where: {
                email,
                NOT: {
                    id,
                },
            },
        });

        if (emailExists) {
            return res.status(400).json({
                message: "Another contact already uses this email",
            });
        }

        const updatedContact = await prisma.contact.update({
            where: { id },
            data: {
                name,
                email,
                phone,
                address,
                company,
            },
        });

        res.status(200).json({
            message: "Contact updated successfully",
            data: updatedContact,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }

};


// DELETE CONTACT
const deleteContact = async (req, res) => {

    try {

        const id = req.params.id;

        const existingContact = await prisma.contact.findUnique({
            where: { id },
        });

        if (!existingContact) {
            return res.status(404).json({
                message: "Contact not found",
            });
        }

        await prisma.contact.delete({
            where: { id },
        });

        res.status(200).json({
            message: "Contact deleted successfully",
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }

};


// SEARCH CONTACTS
const searchContacts = async (req, res) => {

    try {

        const { search } = req.query;

        if (!search) {
            return res.status(400).json({
                message: "Search keyword is required",
            });
        }

        const contacts = await prisma.contact.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        email: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        phone: {
                            contains: search,
                        },
                    },
                ],
            },
        });

        res.status(200).json({
            message: "Contacts fetched successfully",
            data: contacts,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }

};


// SORT CONTACTS
const sortContacts = async (req, res) => {
    try {

        // Get query parameters
        const { sort = "name", order = "asc" } = req.query;

        // Allowed fields for sorting
        const allowedFields = [
            "name",
            "email",
            "company",
        ];

        // Check if requested field is allowed
        const sortField = allowedFields.includes(sort)
            ? sort
            : "name";

        // Get sorted contacts
        const contacts = await prisma.contact.findMany({
            orderBy: {
                [sortField]:
                    order === "desc"
                        ? "desc"
                        : "asc",
            },
        });

        res.status(200).json({
            message: "Contacts sorted successfully",
            data: contacts,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }
};


// PAGINATION
const getContactsPagination = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        const totalContacts = await prisma.contact.count();

        const contacts = await prisma.contact.findMany({
            skip,
            take: limit,
            orderBy: {
                id: "asc",
            },
        });

        res.status(200).json({
            message: "Contacts fetched successfully",
            currentPage: page,
            pageSize: limit,
            totalContacts,
            totalPages: Math.ceil(totalContacts / limit),
            data: contacts,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }

};

module.exports = {
    createContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
    searchContacts,
    sortContacts,
    getContactsPagination,
};
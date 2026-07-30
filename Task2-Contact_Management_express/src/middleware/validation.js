const { z } = require("zod");

// CONTACT VALIDATION SCHEMA
const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Name is required"),

    email: z
        .string()
        .trim()
        .email("Invalid email"),

    phone: z
        .string()
        .regex(
            /^98\d{8}$/,
            "Phone number must be exactly 10 digits and start with 98"
        ),

    address: z
        .string()
        .trim(),

    company: z
        .string()
        .trim(),
});

// BODY VALIDATION
const validateContact = (req, res, next) => {
    try {

        req.body = contactSchema.parse(req.body);

        next();

    } catch (error) {

        return res.status(400).json({
            message: "Validation failed",
            errors: error.errors,
        });

    }
};

// PARAM ID VALIDATION
const validateId = (req, res, next) => {

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            message: "Invalid contact ID",
        });
    }

    req.params.id = id;

    next();
};

module.exports = {
    validateContact,
    validateId,
};
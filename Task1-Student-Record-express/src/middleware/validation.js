const validateStudent = (req, res, next) => {
    const {name, email, age} = req.body;

    // Name validation
    if (!name || name.trim() === ""){
        return res.status(400).json({
            message: "Name is required",
        });
    }

    if (!email || email.trim() === ""){
        return res.status(400).json({
            message: "Email is required",
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Invalid email format",
        });
    }

    // Age validation
    if (age === undefined || age === null) {
        return res.status(400).json({
            message: "Age is required",
        });
    }

    if (typeof age !== "number" || age <= 0) {
        return res.status(400). json({
            message: "Age must be a positive number",
        });
    }

    // tells express:"All validations passed. Continue to the next step."
    next();

};

module.exports = {
    validateStudent,
};
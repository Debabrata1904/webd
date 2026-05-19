import { add_number_db, is_number_exist_db } from "../database/db.js";

const postNumber = (req, res) => {
    const { number } = req.body;

    if (number === undefined) {
        return res.status(400).json({ error: "Number is required" });
    }
    if (typeof number !== "number") {
        return res.status(400).json({ error: "Number must be a valid number" });
    }
    if (is_number_exist_db(number)) {
        return res.status(400).json({ error: "Number already exists" });
    }
    add_number_db(number);
    res.status(201).json({ message: "Number added successfully" });
};

export default postNumber;

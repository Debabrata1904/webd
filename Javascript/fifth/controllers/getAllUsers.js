import User from "../models/User.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // fetch all users from the database
        res.status(200).json({ Users: users }); // send the fetched users as response
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default getAllUsers;
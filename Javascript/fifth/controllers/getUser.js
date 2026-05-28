import User from '../models/User.js';

const getUserById = async (req, res) => {
    try {
        const { id } = req.params; // get user ID from request parameters
        const user = await User.findById(id); // find the user by ID

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ User: user }); // send the fetched user as response
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default getUserById;
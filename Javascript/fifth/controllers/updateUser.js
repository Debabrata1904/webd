import User from '../models/User.js';

const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // get user ID from request parameters
        const updatedData = req.body; // get updated user data from request body

        const user = await User.findByIdAndUpdate(id, updatedData, { new: true }); // find the user by ID and update them

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ User: user }); // send the updated user as response
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default updateUser;
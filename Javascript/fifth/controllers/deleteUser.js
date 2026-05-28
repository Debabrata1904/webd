import User from '../models/User.js';

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // get user ID from request parameters
        const user = await User.findByIdAndDelete(id); // find the user by ID and delete them

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" }); // send success message
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default deleteUser;
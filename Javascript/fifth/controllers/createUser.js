import User from '../models/User.js'; // import the User model

const createUser = async (req, res) => {
    try {
        const { name, age, email } = req.body;  // get user data from request body
        
        const user = await User.create({ name, age, email }); // create a new user in the database

        res.status(201).json({ User: user }); // send the created user as response

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default createUser;

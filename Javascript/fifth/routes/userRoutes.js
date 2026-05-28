import express from 'express';
import createUser from '../controllers/createUser.js'; // import the createUser controller
import deleteUser from '../controllers/deleteUser.js'; // import the deleteUser controller
import getAllUsers from '../controllers/getAllUsers.js'; // import the getAllUsers controller
import getUserById from '../controllers/getUser.js'; // import the getUserById controller
import updateUser from '../controllers/updateUser.js'; // import the updateUser controller

const router = express.Router();

router.post('/createUser', createUser); // add route for creating a new user
router.delete('/deleteUser/:id', deleteUser); // add route for deleting a user
router.get('/getAllUsers', getAllUsers); // add route for fetching all users
router.get('/getUser/:id', getUserById); // add route for fetching a user by ID
router.put('/updateUser/:id', updateUser); // add route for updating a user

export default router; // export the router for use in the main app

import {register, login} from '../controllers/authControllers.js';
import express from 'express';

const router = express.Router();

router.use(express.json());

router.post('/register', register);
router.post('/login', login);


export default router;
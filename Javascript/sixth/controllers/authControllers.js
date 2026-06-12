import {registerUser, loginUser} from '../services/authService.js';

/*
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await registerUser(email, password);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
*/

export const register = async (req, res) => {
   try{
        const {email, password} = req.body;
        const user = await registerUser(email, password);
        res.status(201).json({ success: true, user });
   } catch (error) {
        res.status(400).json({ success: false, error: error.message });
   }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const {user, token} = await loginUser(email, password);
        res.status(200).json({ success: true, user, token });
    } catch (error) {
        res.status(401).json({ success: false, error: error.message });
    }
};
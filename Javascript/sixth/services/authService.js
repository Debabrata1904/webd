import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

/*
const  JWT_SECRET = process.env.JWT_SECRET || 'my_jwt_secret_key';

export const registerUser = async (email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }

    const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
};
*/

const JWT_SECRET = process.env.JWT_SECRET || 'my_jwt_secret_key';

export const registerUser = async (email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already exists');
    }
  
  const user = new User({ email, password: hashedPassword });
  await user.save();

  return { id: user._id, email: user.email };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign(
    { userId: user._id },
    JWT_SECRET,
    { expiresIn: '1h' });

  return { user: { id: user._id, email: user.email }, token };
};
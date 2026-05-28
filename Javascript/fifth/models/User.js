import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
}, {timestamps: true}); // automtically stores createdAt and updatedAt

const User = mongoose.model('User', userSchema); // creates a model named 'User' based on the userSchema

export default User;

// schema is a blueprint
// model is actual implementation of the schema, it provides an interface to interact with the database (CRUD operations)
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, {timestamps: true});

// Hash the password before saving the user document
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();

    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt); // hashing the password before saving to the database
      next();
    } catch (err) {
      next(err);
    }
  }
});

// during login
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password); // password is hashed again to match with stored hashed password
  } catch (err) {
    throw new Error(err);
  }
};

const User = mongoose.model('User', userSchema);

export default User;
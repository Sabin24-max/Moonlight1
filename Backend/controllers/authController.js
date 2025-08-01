import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../models/index.js';

export const registerUser = async (req, res) => {
  const { fullName, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await db.User.create({ fullName, email, password: hashed, role });
  res.json({ token: jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET) });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await db.User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ token: jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET) });
};

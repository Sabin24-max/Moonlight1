import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

import UserModel from './User.js';
import RoomModel from './Room.js';
import BookingModel from './Booking.js';
import ContactModel from './Contact.js';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

// Init models
const User = UserModel(sequelize, DataTypes);
const Room = RoomModel(sequelize, DataTypes);
const Booking = BookingModel(sequelize, DataTypes);
const Contact = ContactModel(sequelize, DataTypes);

// Setup associations
if (Booking.associate) Booking.associate({ User, Room });
if (Room.associate) Room.associate({ Booking });

const db = {
  sequelize,
  Sequelize,
  User,
  Room,
  Booking,
  Contact,
};

export default db;

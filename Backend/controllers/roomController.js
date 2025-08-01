import db from '../models/index.js';

export const createRoom = async (req, res) => {
  const room = await db.Room.create(req.body);
  res.json(room);
};

export const getRooms = async (req, res) => {
  const rooms = await db.Room.findAll();
  res.json(rooms);
};

export const getRoomById = async (req, res) => {
  const room = await db.Room.findByPk(req.params.id);
  res.json(room);
};

export const updateRoom = async (req, res) => {
  const room = await db.Room.findByPk(req.params.id);
  await room.update(req.body);
  res.json(room);
};

export const deleteRoom = async (req, res) => {
  await db.Room.destroy({ where: { id: req.params.id } });
  res.status(204).end();
};

export default (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    amenities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Room.associate = (models) => {
    Room.hasMany(models.Booking, { foreignKey: 'roomId' });
  };

  return Room;
};

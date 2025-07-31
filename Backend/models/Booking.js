export default (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    checkIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkOut: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'confirmed',
    },
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
    Booking.belongsTo(models.Room, { foreignKey: 'roomId' });
  };

  return Booking;
};

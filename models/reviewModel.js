module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    rating: {
      type: DataTypes.INTEGER,
    },
    descriptioon: {
      type: DataTypes.TEXT,
    },
  });
  return Review;
};

"use strict";
const { Model } = require("sequelize");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    toSafeObject() {
      const { name, time, rating, destinationId } = this;
      return { name, time, rating, destinationId };
    }
    static associate(models) {
      // define association here
      Event.belongsTo(User, { foreignKey: "destinationId" });
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      time: DataTypes.DATE,
      rating: DataTypes.INTEGER,
      destinationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};

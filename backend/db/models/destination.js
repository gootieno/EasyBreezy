"use strict";
const { Model } = require("sequelize");
const User = require("./user");
const Event = require("./Event");
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    toSafeObject() {
      const { name, userId } = this;
      return { name, userId };
    }

    static associate(models) {
      // define association here
      Destination.belongsTo(User, { foreignKey: "userId" });
      Destination.hasMany(Event, { foreignKey: "destinationId" });
    }
  }
  Destination.init(
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Destination",
    }
  );
  return Destination;
};

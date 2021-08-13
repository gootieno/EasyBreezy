"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Events", [
      {
        name: "Surfing",
        time: new Date().toLocaleDateString(),
        rating: 3,
        destinationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shrimp Dinner",
        time: new Date().toLocaleDateString(),
        rating: 5,
        destinationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
    await queryInterface.bulkDelete("Events", null, {});
  },
};

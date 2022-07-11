"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        { name: "Yara", createdAt: new Date(), updatedAt: new Date() },
        { name: "Kevin", createdAt: new Date(), updatedAt: new Date() },
        { name: "Lize", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Nice",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ",
          backgroundColor: "#FAEBD7",
          color: "#FF7F50",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cool",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ",
          backgroundColor: "#FF7F50",
          color: "#FAEBD7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
// title: DataTypes.STRING,
// description: DataTypes.TEXT,
// backgroundColor: DataTypes.STRING,
// color: DataTypes.STRING,

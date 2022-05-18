"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "My Favorite Ape",
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ",
          imageUrl:
            "https://images.theconversation.com/files/225151/original/file-20180627-112641-idgmo2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "My favorite Island",
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-s/12/e3/3b/06/20180507-145857-largejpg.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The best steack I had",
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
          imageUrl:
            "https://produits.bienmanger.com/37388-0w470h470_Steack_Extra_Aubrac_160g.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "My love",
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
          imageUrl:
            "https://i.pinimg.com/736x/94/11/0f/94110f1f6de4160c9f7c0921afc95b7a.jpg",
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
// name: { type: DataTypes.STRING, allowNull: false },
//       content: DataTypes.TEXT,
//       imageUrl: DataTypes.STRING,

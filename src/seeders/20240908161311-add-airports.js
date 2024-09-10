"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert(
            "Airports",
            [
                {
                    name: "Kempegowda International Airport",
                    cityId: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Birsa Munda Airport",
                    cityId: 8,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Jayprakash Narayan International Airport",
                    cityId: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Sardar Vallabhbhai Patel International Airport",
                    cityId: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Pune International Airport",
                    cityId: 13,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Manguluru International Airport",
                    cityId: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Indra Gandhi International Airport",
                    cityId: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};

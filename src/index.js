const express = require("express");
const { PORT, SYNC_DB } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");
const ApiRoutes = require("./routes/index");
const db = require("./models/index");
const { City, Airport } = require("./models/index");
const sequelize = require("sequelize");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at port no: ${PORT}`);
        // const airports = await Airport.findAll({
        //     include: City,
        // });
        // const cities = await City.findAll({
        //     where: {
        //         id: 9
        //     },
        //     include: Airport,
        // });
        // console.log(airports);
        // console.log(cities);
        if (SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }

        // const city = await City.findByPk(9);
        // const city1 = await City.findOne({
        //     where: {
        //         id: 9,
        //     },
        // });
        // const airports = await city.getAirports();
        // console.log(city,airports)
        // await Airport.create({
        //     name: "Mysore Airport",
        //     cityId: 10,
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        // });

        // const airport = await Airport.findByPk(8)
        // await city.addAirport(airport)
       
    });
};

setupAndStartServer();

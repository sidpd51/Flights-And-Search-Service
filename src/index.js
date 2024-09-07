const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        const cityRepository = new CityRepository();
        cityRepository.createCity({ name: "Ahmedabad" });
        console.log(`Server started at port no: ${PORT}`);
    });
};

setupAndStartServer();

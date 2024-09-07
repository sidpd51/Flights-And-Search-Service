const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at port no: ${PORT}`);
    });
};

setupAndStartServer();

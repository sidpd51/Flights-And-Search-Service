import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config/serverConfig.js";

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at port no: ${PORT}`);
    });
};

setupAndStartServer();

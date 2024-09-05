import express from "express";
import { PORT } from "./config/serverConfig.js";

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at port no: ${PORT}`);
    });
};

setupAndStartServer();

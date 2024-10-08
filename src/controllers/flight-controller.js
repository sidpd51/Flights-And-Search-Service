const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        
        return res.status(200).json({
            data: flight,
            success: true,
            message: "Successfully created the flight!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the flight!",
            err: error,
        });
    }
};

const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);

        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the flights!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the flights!",
            err: error,
        });
    }
}

module.exports = {
    create,
    getAll
};

const { AirportService } = require("../services/index");
const airportService = new AirportService()

const create = async (req,res)=>{
    try {
        const response = await airportService.create(req.body)

        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully created the airport!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Can't create a new airport!",
            err: error,
        });
    }
}

module.exports = {
    create
}
const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer!");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId,
                },
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer!");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            await City.update(data, {
                where: {
                    id: cityId,
                },
            });
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer!");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer!");
            throw { error };
        }
    }

    async getAllCities() {
        try {
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer!");
            throw { error };
        }
    }
}

module.exports = CityRepository;

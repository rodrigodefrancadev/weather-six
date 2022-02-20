import config from "../../config/config";
import { citiesWithCountriesArray } from "../../types/enums/AvailableCities";
import OpenWeatherApi from "./OpenWeatherApi";

test("call openWeatherApi", () => {
    const api = new OpenWeatherApi(config.api_key);

    const promises = citiesWithCountriesArray.map(item => api.getWeatherByCityName(item.city));
    return Promise.all(promises).then(result => {
        for (let i = 0; i < result.length; i++) {
            const response = result[i];
            const {city, country} = citiesWithCountriesArray[i];
            expect(response.name).toBe(city);
            expect(response.sys.country).toBe(country)
        }
    });
});
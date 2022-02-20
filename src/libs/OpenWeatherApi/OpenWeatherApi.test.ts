import { citiesWithCountriesArray } from "../../types/enums/AvailableCities";
import OpenWeatherApi from "./OpenWeatherApi";

const apikey = "d8f6e58989e19dba8b98254ffe03d979";
test("call openWeatherApi", () => {
    const api = new OpenWeatherApi(apikey);

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
import AvailableCities, { CitiesWithCountry } from "../../types/enums/AvailableCities";
import OpenWeatherApi from "./OpenWeatherApi";

const apikey = "d8f6e58989e19dba8b98254ffe03d979";
test("call openWeatherApi", () => {
    const api = new OpenWeatherApi(apikey);
    const citiesWithCountriesArray = Object.keys(CitiesWithCountry).map(cityName => {
        const _cityName = cityName as any as AvailableCities;
        return CitiesWithCountry[_cityName];
    });

    const promises = citiesWithCountriesArray.map(item => api.getWeatherByCityName(item.city));
    return Promise.all(promises).then(result => {
        for (let i = 0; i < result.length; i++) {
            const response = result[i];
            expect(response.name).toBe(citiesWithCountriesArray[i].city);
            expect(response.sys.country).toBe(citiesWithCountriesArray[i].country)
        }
    });
});
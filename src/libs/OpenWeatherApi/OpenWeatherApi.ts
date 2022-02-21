import LatLon from "./types/LatLong";
import OneCallApiData from "./types/OneCallApiData";
import WeatherData from "./types/WeatherData";


export default class OpenWeatherApi {
    constructor(private readonly apiKey: string) {

    }

    public async getOneCallApi(latLon: LatLon): Promise<OneCallApiData> {
        const url = `https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${latLon.lat}&lon=${latLon.lon}&exclude=minutely,daily,alerts&appid=${this.apiKey}`;
        const response = await fetch(url, {method: "GET" });

        if (response.status === 200) {
            const weather: OneCallApiData = await response.json();
            return weather;
        }
        else {
            throw new Error("Weather not found to this location: " + JSON.stringify(latLon));
        }
    }

    public async getWeatherByCityName(cityName: string): Promise<WeatherData> {
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${this.apiKey}`;
        const response = await fetch(url, {method: "GET" });

        if (response.status === 200) {
            const weather: WeatherData = await response.json();
            return weather;
        }
        else {
            throw new Error("Weather not found to this city: " + cityName);
        }
    }
}
import OpenWeatherApiData from "./types/OpenWeatherApiData";

export default class OpenWeatherApi {
    constructor(private readonly apiKey: string) {

    }

    public async getWeatherByCityName(cityName: string): Promise<OpenWeatherApiData> {
        const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${this.apiKey}`;
        const response = await fetch(url, {method: "GET" });

        if (response.status === 200) {
            const weather: OpenWeatherApiData = await response.json();
            return weather;
        }
        else {
            throw new Error("Weather not found to this city: " + cityName);
        }
    }
}
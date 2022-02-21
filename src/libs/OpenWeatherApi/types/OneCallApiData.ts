export default interface OneCallApiData {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: 0;
    current: {
        dt: number;
        sunrise: number;
        sunset: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        uvi: number;
        clouds: number;
        visibility: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
    };

    hourly: {
        dt: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        uvi: number;
        clouds: number;
        visibility: number;
        wind_speed: number
        wind_deg: number;
        wind_gust: number;
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        pop: number;
    }[];

}
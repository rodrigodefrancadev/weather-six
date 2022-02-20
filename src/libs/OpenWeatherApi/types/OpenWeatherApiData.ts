export default interface OpenWeatherApiData {
    id: number; // city id
    timezone: number; // seconds
    name: string; // city name
    dt: number; // timestamp

    coord: {
        lon: number;
        lat: number;
    };
    
    main: {
        temp: number; // ºC
        feels_like: number; // ºC
        temp_min: number; // ºC
        temp_max: number; // ºC
        pressure: number; // hPa
        humidity: number; // %
    };

    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];

    wind: {
        speed: number; // m/s
        deg: number;
    };
    
    clouds: {
        all: number; // %
    };

    sys: {
        type: any;
        id: any;
        country: string;
        sunrise: number // timestamp
        sunset: number; // timestamp
    };
    
    cod: any; // internal
    base: any;
    visibility: any; // internal
}
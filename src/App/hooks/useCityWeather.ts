import { useEffect, useMemo, useState } from "react";
import config from "../../config/config";
import OpenWeatherApi from "../../libs/OpenWeatherApi/OpenWeatherApi";
import OneCallApiData from "../../libs/OpenWeatherApi/types/OneCallApiData";
import WeatherData from "../../libs/OpenWeatherApi/types/WeatherData";
import AvailableCities, { isCityAvailable } from "../../types/enums/AvailableCities";

const api = new OpenWeatherApi(config.api_key);

type ReturnType = {
    data: { oneCallApi: OneCallApiData, weather: WeatherData } | undefined;
    loading: boolean;
    error: string | undefined;
};

export default function useCityWeather(city: AvailableCities): ReturnType {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<{ oneCallApi: OneCallApiData, weather: WeatherData } | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setData(undefined);
            setError(undefined);
            if (isCityAvailable(city)) {
                try {
                    const weather = await api.getWeatherByCityName(city);
                    const oneCallApi = await api.getOneCallApi(weather.coord);
                    setData({ oneCallApi, weather });
                }
                catch (ex) {   
                    setError("Api error");
                }
                finally {
                    setLoading(false);
                }
            }
            else {
                setError("City not available");
                setLoading(false);
            }
        })();
    }, [city]);
    
    const result = useMemo<ReturnType>(() => ({data, loading, error}), [data, loading, error]);
    return result;

}
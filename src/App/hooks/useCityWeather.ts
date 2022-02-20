import { useEffect, useMemo, useState } from "react";
import config from "../../config/config";
import OpenWeatherApi from "../../libs/OpenWeatherApi/OpenWeatherApi";
import OpenWeatherApiData from "../../libs/OpenWeatherApi/types/OpenWeatherApiData";
import AvailableCities, { isCityAvailable } from "../../types/enums/AvailableCities";

const api = new OpenWeatherApi(config.api_key);

type ReturnType = {
    data: OpenWeatherApiData | undefined;
    loading: boolean;
    error: string | undefined;
};

export default function useCityWeather(city: AvailableCities) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<OpenWeatherApiData | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setLoading(true);
        setData(undefined);
        setError(undefined);
        if (isCityAvailable(city)) {
            api.getWeatherByCityName(city)
                .then(weather => setData(weather))
                .catch(() => setError("Api error"))
                .finally(() => setLoading(false));
        }
        else {
            setError("City not available");
            setLoading(false);
        }
    }, [city]);
    
    const result = useMemo<ReturnType>(() => ({data, loading, error}), [data, loading, error]);
    return result;

}
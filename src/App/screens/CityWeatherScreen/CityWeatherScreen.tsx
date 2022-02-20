import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AvailableCities from '../../../types/enums/AvailableCities';
import useCityWeather from '../../hooks/useCityWeather';

const CityWeatherScreen: React.FC = () => {
    const routeParams = useParams();
    const city = routeParams.city! as any as AvailableCities;
    const {data, loading, error} = useCityWeather(city);
    
    return (<>
        <Link to='/'>Voltar</Link>
        <div>CityWeatherScreen</div>
        <p><strong>City Name:</strong> {routeParams.city}</p>
        <p><strong>Loading:</strong> {loading.toString()}</p>
        <p><strong>Error:</strong> {JSON.stringify(error)}</p>
        <p><strong>Data:</strong></p>
        <pre>
{JSON.stringify(data, null, 4)}
        </pre>
    </>);
};

export default CityWeatherScreen;
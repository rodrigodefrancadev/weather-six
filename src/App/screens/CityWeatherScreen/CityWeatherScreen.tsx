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
    </>);
};

export default CityWeatherScreen;
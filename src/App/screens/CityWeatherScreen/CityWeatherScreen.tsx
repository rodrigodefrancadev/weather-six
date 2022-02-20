import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CityWeatherScreen: React.FC = () => {
    const routeParams = useParams();
    
    return (<>
        <Link to='/'>Voltar</Link>
        <div>CityWeatherScreen</div>
        <p><strong>City Name:</strong> {routeParams.city}</p>
    </>);
};

export default CityWeatherScreen;
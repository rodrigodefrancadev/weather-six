import React from 'react';
import { Link } from 'react-router-dom';
import { citiesWithCountriesArray } from '../../../types/enums/AvailableCities';


const HomeScreen: React.FC = () => {
    return (<>
        <div>HomeSreen</div>
        <ul>
            {citiesWithCountriesArray.map(({city}) => (
                <li key={city}>
                    <Link to={`/${city}`}>
                        {city}
                    </Link>
                </li>   
            ))}
        </ul>
    </>);
};

export default HomeScreen;
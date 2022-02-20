import React from 'react';
import { Link } from 'react-router-dom';
import { citiesWithCountriesArray } from '../../../types/enums/AvailableCities';
import './HomeScreen.scss';
import _ from 'lodash';
import PageBase from '../../components/PageBase';

const citiesRows = _.chunk(citiesWithCountriesArray, 3);

const HomeScreen: React.FC = () => {
    return (
        <PageBase id='home-screen-container'>
            <div className='title'>Weather</div>
            <div className='subtitle'>select a city</div>
            <img className='world-icon' src="/img/world-icon.png" alt="word-icon" />
            <div className='cities-container'>
                {citiesRows.map((row) => (
                    <div className='city-row'>
                        {row.map(({ city }) => (
                            <div key={city}>
                                <Link to={`/${city}`} className='city-link'>
                                    {city}
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </PageBase>
    );
};

export default HomeScreen;
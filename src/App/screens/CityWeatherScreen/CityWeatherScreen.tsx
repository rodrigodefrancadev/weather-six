import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AvailableCities from '../../../types/enums/AvailableCities';
import PageBase from '../../components/PageBase';
import useCityWeather from '../../hooks/useCityWeather';
import { FaArrowLeft } from 'react-icons/fa';
import './CityWeatherScreen.scss';

const CityWeatherScreen: React.FC = () => {
    const routeParams = useParams();
    const city = routeParams.city! as any as AvailableCities;
    const {data, loading, error} = useCityWeather(city);
    
    return (
        <PageBase loading={loading}>
            <div className='city-weather-screen-container'>
                <GoToBackPageLink />
                {!loading && error && (
                    <div>error message</div>
                )}

                {!loading && data && (
                    <div>
                        <div>{city}</div>
                        <div>{data.oneCallApi.current.weather[0].main}</div>
                        <div>    
                            <div>{data.oneCallApi.current.temp.toFixed(0)}</div>
                            <div>
                                <div>ºC</div>
                                <div>
                                    <div>{data.weather.main.temp_max.toFixed(0)}º</div>
                                    <div>{data.weather.main.temp_min.toFixed(0)}º</div>
                                </div>
                            </div>
                        </div>
                        <i className={`owi owi-${data.oneCallApi.current.weather[0].icon}`} />
                        <div>
                        
                        </div>
                    </div>
                )}

            </div>
        </PageBase>
    );
};

const GoToBackPageLink: React.FC = () => (
    <div className='go-to-back-button'>
        <Link to='/'>
            <FaArrowLeft />
        </Link>
    </div>
);

export default CityWeatherScreen;
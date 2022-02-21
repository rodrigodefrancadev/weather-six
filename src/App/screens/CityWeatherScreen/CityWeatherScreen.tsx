import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import AvailableCities from '../../../types/enums/AvailableCities';
import PageBase from '../../components/PageBase';
import useCityWeather from '../../hooks/useCityWeather';
import { MdArrowRightAlt } from 'react-icons/md';
import SubweatherRender from './components/SubweatherRender';
import HourlyForecast from '../../../libs/OpenWeatherApi/types/HourlyForecast';
import { format } from 'date-fns';
import GoToBackPageLink from './components/GoToBackPageLink';
import './CityWeatherScreen.scss';
import useWeatherColor from '../../hooks/useWeatherColor';
import ErrorMessage from './components/ErrorMessage';

const hourlyWeathers = [
    {label: 'down', hour: 3},
    {label: 'morning', hour: 9},
    {label: 'afternoon', hour: 15},
    {label: 'night', hour: 21}
];

const CityWeatherScreen: React.FC = () => {
    const routeParams = useParams();
    const city = routeParams.city! as any as AvailableCities;
    const {data, loading, error} = useCityWeather(city);

    const hourlyData = useMemo<undefined | {label: string, weather: HourlyForecast}[]>(() => {
        if (data) {
            const res = data.oneCallApi.hourly.map(x => {
                const date = new Date(x.dt*1000);
                return {
                    date,
                    hour: date.getHours(),
                    data: x
                };
            });
            return hourlyWeathers.map(x => ({
                label: x.label,
                weather: res.find(item => item.hour === x.hour)!.data
            }));
        }
        else return undefined;
    }, [data]);

    const sunrise = useMemo(() => data ? format(new Date(data.oneCallApi.current.sunrise*1000), 'h:mm aa') : '', [data]);
    const sunset = useMemo(() => data ? format(new Date(data.oneCallApi.current.sunset*1000), 'h:mm aa') : '', [data]);

    const weatherColor = useWeatherColor(data?.weather.weather[0].main, error);
    return (
        <PageBase loading={loading} backgroundGradient={weatherColor.backgroundGradient}>
            <div className='city-weather-screen-container' style={{color: weatherColor.color}}>
                <GoToBackPageLink />
                {!loading && error && (
                    <ErrorMessage />
                )}

                {!loading && data && (
                    <div className='city-weather-info-container'>
                        <div className='city-name'>{city}</div>
                        <div className='main-weather'>{data.weather.weather[0].main}</div>
                        <div className='temperature-container'>    
                            <div>{data.oneCallApi.current.temp.toFixed(0)}</div>
                            <div>
                                <div>ºC</div>
                                <div>
                                    <div><MdArrowRightAlt style={{transform: 'rotate(-90deg)'}}/> {data.weather.main.temp_max.toFixed(0)}º</div>
                                    <div><MdArrowRightAlt style={{transform: 'rotate(90deg)'}}/>{data.weather.main.temp_min.toFixed(0)}º</div>
                                </div>
                            </div>
                        </div>
                        
                        <i className={`current-weather-icon owi owi-${data.oneCallApi.current.weather[0].icon}`} />
                        
                        <div className='subweather-container'>
                            {hourlyData?.map(item => (
                                <SubweatherRender
                                    key={item.label}
                                    label={item.label}
                                    icon={item.weather.weather[0].icon}
                                    temperature={item.weather.temp}
                                />
                            ))}
                        </div>

                        <div className='subitens-container'>
                            <div className='subitem'>
                                <div>wind speed</div>
                                <div>{data.weather.wind.speed.toFixed(1)} m/s</div>
                            </div>

                            <div className='divider' />

                            <div className='subitem'>
                                <div>sunrise</div>
                                <div>{sunrise}</div>
                            </div>

                            <div className='divider' />

                            <div className='subitem'>
                                <div>sunset</div>
                                <div>{sunset}</div>
                            </div>

                            <div className='divider' />

                            <div className='subitem'>
                                <div>humidity</div>
                                <div>{data.oneCallApi.current.humidity.toFixed(1)}%</div>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </PageBase>
    );
};

export default CityWeatherScreen;
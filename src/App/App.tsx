import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import CityWeatherScreen from './screens/CityWeatherScreen/CityWeatherScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const App: React.FC = () =>  {
  return (
    <div className='app-content-container'>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path=':city' element={<CityWeatherScreen />} />
        <Route path='*' element={<Navigate to={'/'} />}  />
      </Routes>
    </div>
  );
}

export default App;

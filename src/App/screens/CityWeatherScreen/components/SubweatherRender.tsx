import React from 'react';

interface ISubweatherRenderProps {
    label: string;
    icon: string;
    temperature: number;
}

const SubweatherRender: React.FC<ISubweatherRenderProps> = (props) => (
    <div className='subweather-item'>
        <div>{props.label}</div>
        <i className={`owi owi-${props.icon}`} />
        <div>{props.temperature.toFixed(0)}ºC</div>
    </div>
);

export default SubweatherRender;
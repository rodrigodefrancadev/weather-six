import React, { useEffect } from "react"
import { BackgrounGradient } from "../components/PageBase/PageBase"

const defaultColor = {
    color: 'white',
    backgroundGradient: {
        start: 'rgba(97,105,120,1)',
        end: 'rgba(60,67,83,1)'
    }
};

const errorColor= {
    color: 'white',
    backgroundGradient: {
        start: 'rgba(238,129,144,1)',
        end: 'rgba(226,92,109,1)'
    }
}


interface WeatherColor {
    color: string;
    backgroundGradient: BackgrounGradient;
}

export default function useWeatherColor(weather?: string, error?: any) {
    const [weatherColor, setWeatherColor] = React.useState<WeatherColor>(getWeatherColor(weather));
    useEffect(() => {
        setWeatherColor(error ? errorColor : getWeatherColor(weather));
    }, [weather, error]);

    return weatherColor;
}

function getWeatherColor(weather?: string): WeatherColor {
    console.log('getting color to: ', weather);

    if (weather === undefined) {
        return defaultColor;
    }
    else {
        switch (weather) {
            case 'Thunderstorm':
            case 'Drizzle':
            case 'Rain':
                return defaultColor;

            case 'Snow':
                return {
                    color: '#1F1F1F',
                    backgroundGradient: {
                        start: 'rgba(224,224,224,1)',
                        end: 'rgba(166,166,166,1)'
                    }
                };

            case 'Clear':
                return {
                    color: 'white',
                    backgroundGradient: {
                        start: 'rgba(86,203,219,1)',
                        end: 'rgba(58,160,181,1)'
                    }
                }

            default:
                return defaultColor;
        }
    }
}
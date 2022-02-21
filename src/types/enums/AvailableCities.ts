import LatLon from "../../libs/OpenWeatherApi/types/LatLong";

enum AvailableCities {
    LONDON_GB = "London",
    DALLOL_NG = "Dallol",
    FAIRBANKS_US = "Fairbanks",
    RECIFE_BR = "Recife",
    VANCOUVER_CA = "Vancouver",
    YAKUTSK_RU = "Yakutsk"
}

export const citiesWithCountry: Record<AvailableCities, {city: string, country: string}> = {
    [AvailableCities.DALLOL_NG]: {
        city: "Dallol",
        country: "NG"
    },
    [AvailableCities.FAIRBANKS_US]: {
        city: "Fairbanks",
        country: "US"
    },
    [AvailableCities.LONDON_GB]: {
        city: "London",
        country: "GB"
    },
    [AvailableCities.RECIFE_BR]: {
        city: "Recife",
        country: "BR"
    },
    [AvailableCities.VANCOUVER_CA]: {
        city: "Vancouver",
        country: "CA"
    },
    [AvailableCities.YAKUTSK_RU]: {
        city: "Yakutsk",
        country: "RU"
    }
};

export const citiesWithCountriesArray = Object.keys(citiesWithCountry).map(cityName => {
    const _cityName = cityName as any as AvailableCities;
    return citiesWithCountry[_cityName];
});

export const citiesLatLon: Record<AvailableCities, LatLon> = {
    [AvailableCities.DALLOL_NG]: {
        lat: 51.5085,
        lon: -0.1257
    },
    [AvailableCities.FAIRBANKS_US]: {
        lat: 51.5085,
        lon: -0.1257
    },
    [AvailableCities.LONDON_GB]: {
        lat: 51.5085,
        lon: -0.1257
    },
    [AvailableCities.RECIFE_BR]: {
        lat: 51.5085,
        lon: -0.1257
    },
    [AvailableCities.VANCOUVER_CA]: {
        lat: 51.5085,
        lon: -0.1257
    },
    [AvailableCities.YAKUTSK_RU]: {
        lat: 51.5085,
        lon: -0.1257
    }
}

export function isCityAvailable(city: string): boolean {
    return citiesWithCountriesArray.map(x => x.city).includes(city);
}

export default AvailableCities;
enum AvailableCities {
    LONDON_GB = "London",
    DALLOL_NG = "Dallol",
    FAIRBANKS_US = "Fairbanks",
    RECIFE_BR = "Recife",
    VANCOUVER_CA = "Vancouver",
    YAKUTSK_RU = "Yakutsk"
}

export const CitiesWithCountry: Record<AvailableCities, {city: string, country: string}> = {
    [AvailableCities.LONDON_GB]: {
        city: "London",
        country: "GB"
    },
    [AvailableCities.DALLOL_NG]: {
        city: "Dallol",
        country: "NG"
    },
    [AvailableCities.FAIRBANKS_US]: {
        city: "Fairbanks",
        country: "US"
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
    },
}

export default AvailableCities;
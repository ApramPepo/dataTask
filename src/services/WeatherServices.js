const Apikey = import.meta.env.VITE_WEATHER_API_KEY;

export default async function getData(latitude, longitude) {
    const query = latitude && longitude ? `${latitude},${longitude}` : 'cairo';
    const url = `https://api.weatherapi.com/v1/current.json?key=${Apikey}&q=${query}&aqi=no`;

    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`Request failed. ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error fetching data from API: ${error}`);
        throw error;
    }
}
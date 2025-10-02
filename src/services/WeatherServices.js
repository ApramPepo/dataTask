const Apikey = import.meta.env.VITE_WEATHER_API_KEY;
const url = `https://api.weatherapi.com/v1/current.json?key=${Apikey}&q=Cairo&aqi=no`;

export default async function getData() {
    try {
        const response = await fetch(url)
        console.log("URL:", url);

        if(!response.ok) {
            throw new Error(`Request failed. ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error(`Error fetching data from API: ${error}`);
    } throw error;
}
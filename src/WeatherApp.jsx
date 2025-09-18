import { useState } from "react";
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import WebNav from "./WebNav";
import Footer from './Footer';




export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Noida",
        feelsLike: 33.33,
        humidity: 29,
        temp: 34.16,
        tempMin: 34.16,
        tempMax: 34.16,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign:"center"}}>
            <WebNav />
            <br />
            <h1>Weatherly App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
            <Footer />
        </div>
    );
}
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "53bcff2d0a1a0cf0626c7078ca6d8631";

    let getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRespense = await response.json();
        console.log(jsonRespense);
        let result = {
            city:city,
            temp: jsonRespense.main.temp,
            tempMin: jsonRespense.main.temp_min,
            tempMax: jsonRespense.main.temp_max,
            humidity: jsonRespense.main.humidity,
            feelsLike: jsonRespense.main.feels_like,
            weather: jsonRespense.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
        
    };

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) =>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    }

    return (<div className='SearchBox'>
                <form onSubmit={handleSubmit}>
                    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                    <br /><br />
                    <Button variant="contained" type='submit' >
                        Search
                    </Button>
                    {error && <p style={{color:"red"}}>No such place exists!</p>}
                </form>
           </div>
        );
}
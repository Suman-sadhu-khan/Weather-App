import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp(){
    const[WeatherInfo,setWeatherInfo]=useState({
        city:"Wanderland",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:26.07,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}
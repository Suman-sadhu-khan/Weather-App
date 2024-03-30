import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1440115114579-0c4259c59d35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdCUyMHdlYXRoZXIlMjAlMjBpbWFnZSUyMHdpdGglMjBzdW58ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1528191710846-99b8717a2830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXIlMjAlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1696671648700-07cf7f5a0d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW4lMjAlMjB3ZWF0aGVyJTIwJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
    
    return (
        <div className='InfoBox'>
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className='cardContainer'>

            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}

            image={info.humidity>80? RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}
            
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity>80?<ThunderstormIcon/>:(info.temp>15)?<WbSunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temparature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
            </Typography>
        </CardContent>
        </Card>
    </div>
 </div>
    )
}
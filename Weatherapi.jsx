import React, {useState } from 'react'

const Weatherapi = () => {
    const [city,setCity] = useState("");
   const [weatherData,setWeatherData]=useState(null);
    const [error,setError]=useState("");

   async function fetchData(){
    try{
        const key ="9b5b14880f5643eb9e5114412250304";
        const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
        const res = await data.json();
        if(res?.error)
            {
                setError(res?.error)
                setWeatherData(null)
            }
            else {
                setWeatherData(res);
                setError("")
            }
        setCity("")
    }
    catch(err){
        console.log(err)
    }
    }

    function handleWeather(){
        fetchData();
    }

    

  return (
    <div style={{
        padding:"10px 10px",
        display:"flex",flexDirection:"column",alignItems:"center",
        border:"1px solid #ccc",
        gap:"10px"
    }}>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} style={{
            width:"250px",
            padding:"10px",
            boxShadow:"0px 5px 5px #ccc",
            fontSize:"20px",
            border:"1px solid green"
        }}/>
        <button
        onClick={handleWeather}
        style={{
            padding:"10px 15px",
            fontSize:"20px"
        }}
        >Get</button>
        {
            weatherData?.current &&
            <div>
            <h2>City : {weatherData?.location?.name}</h2>
            <h3>Temperature : {weatherData?.current?.temp_c}</h3>
            <h3>{weatherData?.current?.condition?.text}</h3>
            <img src={weatherData?.current?.condition?.icon} alt="" />
            </div>
        }
        {
            error && <h1>{error.message}</h1>
        }
        
    </div>
  )
}

export default Weatherapi
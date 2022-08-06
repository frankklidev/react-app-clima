import React,{useState} from 'react';
import axios from 'axios';

function App() {

 const [data,setData]=useState({});
 const [location,setLocation] =useState(''); 

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1a3a1e1cfe8af321e43ed7e1a778de4c`;

 const searchLocation = (e)=>{
   if (e.key === 'Enter') {
    axios.get(url).then(response=>{
      setData(response.data);
      console.log(response.data);
    })
    setLocation('');
   }
   
 }

  return (
    <div className="app">
      <div className="search">
      <input
       type="text"
       value={location} 
       onChange={e=>setLocation(e.target.value)}
       placeholder='Enter Location'
       onKeyPress={searchLocation}
      />
      </div>
     
    <div className="container">
    <div className="top">
     <div className="location">
       <p>{data.name}</p>
       </div> 
       <div className="temp">
         {data.main?<h1>{((parseInt(data.main.temp.toFixed())-32)*0.5556).toFixed()}°C</h1>:null}
         </div> 
         <div className="description">
           {data.weather ? <p>{data.weather[0].main}</p>:null}
           </div> 
    </div>

     {data.name !== undefined&&
      <div className="bottom">
      <div className="feels">
        {data.main ? <p className='bold'>{((parseInt(data.main.feels_like.toFixed())-32)*0.5556).toFixed()}°C</p>:null}
        <p>Feels Like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p>:null}
        <p>Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p>:null}
        <p>Wind Speed</p>
      </div>
    </div>
     }

   


    </div>
    </div>
  );
}

export default App;

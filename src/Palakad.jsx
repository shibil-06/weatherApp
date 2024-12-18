import React from 'react'
import useFetch from './useFetch'


const  Palakad =() => {
      
  const Details =  useFetch("https://api.openweathermap.org/data/2.5/weather?q=PALAKKAD&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric&authuser=")
   console.log(Details);
   
  return (
  
    <div className='d-flex justify-content-center align-items-center bg-dark-subtle' id='background'>
    <div className='shadow-lg p-3 mb-3 bg-body-tertiary w-50 rounded mt-5 ' id='bg'>
    <h1 className='text-center text-primary-emphasis'>Weather-App</h1>
       
      
        
        { Details && (

        <div>
           <div className='text-center mt-3 '>
            <h1 className='fw-bolder p-2 fst-italic text-success'>
              {Details.name}</h1>  
            <p className='fw-bolder p-2 '>  <i className="fas fa-temperature-high p-2"></i>
             Temperature :<span className='text-primary-emphasis'>
              {Details.main.temp}°C</span> </p>
            <p className='fw-bolder p-2'>
            <i class="fa-solid fa-cloud p-2"></i>
              Weather :<span className='text-primary-emphasis'>{Details.weather[0].description}</span></p>
            <p className='fw-bolder p-2'>
              <i className='fas fa-tint p-2'></i>
              Humidity:<span className='text-primary-emphasis'>
              {Details.main.humidity}%</span></p>
           </div>
           <div className='text-center d-flex justify-content-center align-items-center mt-5 p-5'>
            <div className=' border border-primary-subtle p-5 rounded-' id='sunrise'><span className='text-warning fw-bolder '>
              Sunrise </span><br></br> <span className='fw-bolder'>{new Date(Details.sys.sunrise * 1000).toLocaleTimeString()}</span></div>
            <div className='border border-primary-subtle p-5 ms-5 rounded-' id='sunset'><span className='text-warning fw-bolder'>
              Sunset
              </span ><br>
            </br><span className='fw-bolder'>{new Date(Details.sys.sunset * 1000).toLocaleTimeString()}</span></div>
           </div>
        </div>


      
   )}
   </div>
   </div>
  );
  };
    



export default Palakad
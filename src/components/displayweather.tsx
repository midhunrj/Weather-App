import React, { useState,useEffect } from 'react'
import { MainWrapper } from './styles.module'
import { AiOutlineSearch } from "react-icons/ai"
import {WiHumidity} from "react-icons/wi"
import { FaWind } from "react-icons/fa"
import { BsFillSunFill,BsCloudyFill,BsFillCloudRainFill,BsCloudFog2Fill} from "react-icons/bs";
import { BiLoader } from "react-icons/bi";
import {TiWeatherPartlySunny} from "react-icons/ti"
import axios from 'axios'
import { useTheme } from '../themecontext'
import ThemeToggleButton from './themeToggle'
interface weatherdataprops{
  name:string;
    main:{
        temp:number;
        humidity:number;
    },
    sys:{
        country:string;
    },
    weather:{
        main:string;
    }[];
    wind:{
        speed:number;
    }
}
const Displayweather=()=>{
    const {theme,toggleTheme}=useTheme()
    const apiKey = 'e8960af9d9632b0bd15d839995e80e27'
    const api_Endpoint="https://api.openweathermap.org/data/2.5/"
     const [weatherdata,setweatherdata]=useState<weatherdataprops|null>(null)
    const[isloading,setloading]=useState(false)
    const[searchcity,setsearchcity]=useState("")
    
    const fetchcurrentweather=async(lat:number,lon:number)=>{
    const url=`${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    const response=await  axios.get(url)
    return response.data   
}

const fetchweatherdata=async(city:string)=>{
    try{
        const url=`${api_Endpoint}weather?q=${city}&appid=${apiKey}&units=metric`
     const searchresponse=await axios.get(url)
     const searchresults:weatherdataprops=searchresponse.data
     return {searchresults}
    }
    catch(error)
    {
        console.error("no data found")
        throw error;
    }
}

const handlesearch=async()=>{
    if(searchcity.trim()==="")
    {
        return
    }
   setloading(true)
    try{
        const {searchresults}=await fetchweatherdata(searchcity)
        setweatherdata(searchresults)
        setloading(false)
    }
    catch(err)
    {
        console.error("no results found");
        setloading(false)
    }
}
const iconchanger=(weather:string)=>{
     let iconElement:React.ReactNode;
     let iconColor:string;

     switch(weather)
     {
        case "Rain":
        iconElement=<BsFillCloudRainFill/>
        iconColor="#272829";
        break;
        case "Clear":
            iconElement=<BsFillSunFill/>
            iconColor="#FFC436";
         break;
         case  "Clouds" :
            iconElement=<BsCloudyFill/>
            iconColor='#102C57';
            break;
            case "Mist":
                iconElement=<BsCloudFog2Fill/>
                iconColor='#279EFF';
                break;
                default:
                    iconElement=<TiWeatherPartlySunny/>
                    iconColor='#7B2869'
     }

     return(
        <span className="icon" style={{color:iconColor}}>
        {iconElement}</span>
     )
}
useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude,longitude}=position.coords
        Promise.all([fetchcurrentweather(latitude,longitude)]).then(
            ([currentweather])=>{
                
                setweatherdata(currentweather)
                setloading(false)
                console.log(currentweather);
                
            }
        )
    })
},[])
    return(
        
        <MainWrapper themeMode={theme}>
            <div className='container'>
                {/* <button onClick={toggleTheme} className='theme-button'>
                    {theme==='black'?'switch ot Light Theme':'Switch to Dark Theme'}
                </button> */}
                <ThemeToggleButton/>
                <div className='searchArea'>
                    <input type="text" placeholder="enter a city" value={searchcity} 
                    onChange={(e)=>setsearchcity(e.target.value)} 
                     onKeyDown={(e)=>e.key==='Enter'&& handlesearch()}></input>
                  <div className='searchcircle'>
                    <AiOutlineSearch className='searchIcon' onClick={handlesearch}/>
                </div>
                </div>
                {weatherdata && !isloading ?(
                    <>
                <div className='weatherArea'>
                    <h1>{weatherdata.name}</h1>
                    <span>{weatherdata.sys.country}</span>
                    <div className='icon'>{iconchanger(weatherdata.weather[0].main)}</div>
                    <h1>{weatherdata.main.temp}</h1>
                    <h2>{weatherdata.weather[0].main}</h2>
                </div>

                <div className='bottomInfoArea'>
                    <div className='humiditylevel'>
                    <WiHumidity  className='windIcon'/>
                    <div className='humidInfo'>
                        <h1>{weatherdata.main.humidity}</h1>
                        <p>Humidity</p>
                    </div>
                    </div>
                    <div className='wind'>
                      <FaWind className="windIcon"/> 
                      <div className='humidInfo'>
                        <h1>{weatherdata.wind.speed}</h1>
                        <p>wind speed</p>
                    </div> 
                    </div>
                </div>
                </>):(
                   <div className='loading'>
                    <BiLoader className='loadingIcon'/>
                    <p>Loading ...</p>
                   </div> 
                )}
            </div>
        </MainWrapper>
       
    )    
}
export default Displayweather
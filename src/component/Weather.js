import { useEffect, useState } from "react";


const Weather = () => {
  const api_key = "a979a13bc0bd210878acc69bd4984cba";
  const [weather,setWeather]=useState(null);
  const [loding,setLoding]=useState(true);
  const [error,setErorr]=useState(null);
  useEffect(()=>{
    if(!navigator.geolocation){
      setErorr("위치 정보를 지원하지 않는 브라우저 입니다");
      setLoding(false);
      return
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude,longitude} = position.coords;
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric&lang=kr`;
      // console.log(URL);
      //fetch api : 브라우저 내장함수, 외부에 요청을 보내고 응답 받을 수 있음
      fetch(URL)
      .then((res)=>{
        if(!res.ok){
          setErorr("데이터 요청실패!");
        }
        return res.json();
      })
      .then((data)=>{
        console.log(data);
        setWeather(data);
        setLoding(false);
      })
      .catch((err)=>{
        setErorr("날씨 데이터를 불러오는데 실패했습니다");
        setLoding(false);
      });
    });
  },[]);
  return (
    <div className="weather">
      <h1>오늘의 날씨</h1>
      <br></br>
      {
        weather && (
          <div className="weatherwrap">
            <h3>{weather.name}</h3>
            <h3>{weather.main.temp}</h3>
            <h3>{weather.weather[0].description}</h3>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
          </div>
        )
      }
    </div>
  );
};

export default Weather;
import {useEffect, useState} from "react";
import "./App.scss";
import Login from "./component/Login";
import Time from "./component/Time";
import MainPage from "./component/MainPage";
import Weather from "./component/Weather";
import BgImg from "./component/BgImg";

// import bgImg from "./img/sum.jpg";

const App = () => {
  const user_key="user_name";
  const [user,setUser]=useState('');
  //처음 시작하자 마자 유저네임을 읽어와야 함
  useEffect(()=>{
    const saved=localStorage.getItem(user_key);
    if(saved){
      setUser(saved);
    }
  },[]);
  const handleLogin= (data)=>{
    localStorage.setItem(user_key,data);
    setUser(data);
  }
  const handleLogout= ()=>{
    localStorage.removeItem(user_key);
    setUser('');
  }
  return (
    <div className="app">
      {/* <img src="./img/summer.jpg" alt="여름이미지"/> */}
      {/* <img src={`${process.env.PUBLIC_URL}/img/summer.jpg`} alt='이미지'/> */}
      {/* <img src={bgImg} art="이미지"/> */}
      <BgImg />
      <Weather />
      <Time />
      {
        user?
        (<MainPage user={user} onLogout={handleLogout}/>
      ):
        (<Login onLogin={handleLogin}/>
      )
      }
    </div>
  );
};

export default App;
import {useEffect, useState} from "react";

const quotes=[
"가는 말이 고우면 얕본다",
"즐길 수 없으면 피해라",
"성공은 1%의 재능과 99%의 빽이다",
"엉망으로 살아야해 인생은 한번이야",
"잘생긴 놈은 얼굴 값하고 못생긴 놈은 꼴값한다",
"고생 끝에 골병난다",
"내일도 할 수 있는 일을 굳이 오늘 할 필요가 없다",
"늦었다고 생각할 때는 이미 늦었다.",
"늦었다고 생각할때가 늦은거다 그러니 지금 당장 시작해라",
"참을 인 세번이면 호구"
];

const Quote= ()=>{
  const [quote,setQuote]=useState('');
  useEffect(()=>{
    const random = Math.floor(Math.random()*quotes.length);
    setQuote(quotes[random]);
  },[]);
  //랜덤하게 명언 추출
  // Math.random(); //0~1 : 0~quote.lenth
  return (
    <div className="quote">
      오늘의 명언: "{quote}"
    </div>
  );
}

export default Quote;
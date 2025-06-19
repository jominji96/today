import {useState, useEffect} from 'react';

const BgImg = () => {
  const imges = [
    //이미지 배열 가져오기
    './img/img_01.webp',
    './img/img_02.webp',
    './img/img_03.webp',
    './img/img_04.webp',
    './img/img_05.webp',
    './img/img_06.webp',
    './img/img_07.webp',
    './img/img_08.webp',
    './img/img_10.webp',
    './img/img_11.webp',
    './img/img_12.webp',
  ];
  //현재 이미지 인덱스 설정
  const [currentImg,setCurrentImg]=useState(0);
  useEffect(()=>{
    //1분에 마다 이미지 변경
    const timer = setInterval(()=>{
      //다음 이미지로 변경(마지막 이미지는 다시 처음으로)
      setCurrentImg((prevIndex)=>(prevIndex+1) % imges.length);
    },100000);
    return ()=> clearInterval(timer);
  },[currentImg]);

  return (
    <div>
      {!currentImg && <p>이미지 로딩중...</p>}
      <div>
        <img
          className='bg'
          src={imges[currentImg]}
          art={`이미지 ${currentImg+1}`}
        />
      </div>
    </div>
  );
};

export default BgImg;
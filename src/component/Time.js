import { useEffect, useState } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    const closeEffect = () => {
      clearInterval(intervalId);
    }
    return closeEffect;
  }, []);
  return (
    <>
      <div className='date'>
        <div className='year'>
          {time.toLocaleDateString('ko-KR', {
            year: '2-digit'
          })}
        </div>
        <div className='month'>
          {time.toLocaleDateString('ko-KR', {
            month: 'long'
          })}
        </div>
        <div className='day'>
          {time.toLocaleDateString('ko-KR', {
            day: '2-digit'
          })}
        </div>
      </div>
      <div className='time'>
        {/* {time.toLocaleTimeString('en-US')} */}
        {/* {time.toLocaleTimeString('ko-KR',{
        hour12: false
      })} */}
        <div className='hour'>
          {time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            hour12: false
          })}
        </div>
        :
        <div className='minuth'>
          {time.toLocaleTimeString('en-US', {
            minute: '2-digit'
          })}
        </div>
        :
        <div className='second'>
          {time.toLocaleTimeString('en-US', {
            second: '2-digit'
          })}
        </div>
      </div>
    </>
  );
};

export default Time;
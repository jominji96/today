import {useState} from 'react';

const Login = ({onLogin}) => {
  const [user,setUser]=useState('');
  const submit= (e)=>{
    e.preventDefault();
    const trimmed = user.trim();
    if(trimmed){ //빈 값이 아닐 경우
      onLogin(user); //부모에게 데이터 전송
    setUser('');
    }
  }
  return (
    <form onSubmit={submit}>
      <input
        className='logininput'
        type='text'
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
        placeholder='이름을 입력해주세요'
      />
      <button
        className='loginBtn'
        type='submit'>
        입장하기
      </button>
    </form>
  );
};

export default Login;
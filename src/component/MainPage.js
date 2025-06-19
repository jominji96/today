//시간대에 따라 인사말을 다르게 보여주기
//theme를 만들고 버튼 클릭시 테마로 보여주기
//알람 기능 추가(몇분 뒤에 팝업)
import {useEffect, useState} from 'react';
import Quote from "./Quote";
import TodoList from './TodoList';
import TodoFrom from './TodoFrom';


const MainPage = ({user,onLogout}) => {
  const todo_key = "todo";
  const [todo,setTodo]=useState([]);
  //처음에 로컬스토리지에 저장된 todo값이 있으면 읽어와서 설정
  useEffect(()=>{
    const saved = localStorage.getItem(todo_key); //문자열
    if(saved){
      setTodo(JSON.parse(saved)); //문자열->객체
    }
  },[]);
  //todo가 변경되면 로컬스토리지에 저장
  useEffect(()=>{
    const saved = JSON.stringify(todo);
    localStorage.setItem(todo_key,saved);
  },[todo]);
  const addTodo = (text)=>{
    const newTodo = {id:Date.now(), todo:text, done:false};
    setTodo([...todo,newTodo]);
  }
  const deletTodo= (id)=>{
    const upDate = todo.filter((item)=>{
      return item.id !== id;
    });
    setTodo(upDate);
  }
  const toggleTodo = (id)=>{
    const upDate = todo.map((item)=>{
      return item.id === id ? {...item, done:!item.done} : item;
    });
    setTodo(upDate);
  }
  return (
    <div className='main'>
      <h2 className='mainh2'>{user} 님 반갑습니다</h2>
      <button onClick={onLogout} className='mainBtn'>로그아웃</button>
      <Quote />
      <TodoFrom onAdd={addTodo}/>
      <TodoList todo={todo} onDelet={deletTodo} onToggle={toggleTodo}/>
    </div>
  );
};

export default MainPage;
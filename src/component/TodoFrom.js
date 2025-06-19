import {useState} from "react";

const TodoFrom = ({onAdd}) => {
  const [task,setTask]=useState('');
  const handleSubmit= (e)=>{
    //입력된 값을 초기화 시켜주는 것
    e.preventDefault();
    const trimmed = task.trim();
    if(trimmed){
      // 할 일 텍스트를 '메일 페이지(부모)'에 전달
      onAdd(task);
      setTask('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="todoform">
        <input
          className="form"
          type="text"
          value={task}
          onChange={(e)=>{setTask(e.target.value)}}
          placeholder="할 일을 입력하세요"
        />
        <button className="todoBtn" type="submit">추가</button>
      </div>
    </form>
  );
};

export default TodoFrom;
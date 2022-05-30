import React, { useState } from 'react';
import TodoFinish from './components/TodoFinish';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import './Home.css';

const Home = () => {
  //todolist를 생성하여 입력한 투두를 담을 수 있도록
  const [todo, setTodo] = useState([]);

  return (
    <div className="Header">
      TODO List
      <div className="homepage">
        {/* 할 일 추가하는 박스     */}
        <TodoInsert todo={todo} setTodo={setTodo} />

        {/* 할 일 리스트 */}
        <TodoList title={'할 일'} todo={todo} setTodo={setTodo} />

        {/* 완료한 할 일 리스트 */}
        <TodoFinish />
      </div>
    </div>
  );
};

export default Home;

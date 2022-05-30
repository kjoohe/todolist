import React from 'react';
import './todo.css';
import TodoList from './TodoList';

const TodoFinish = ({ title, todo, setTodo }) => (
  <div className="todofin">
    <p className="todofin_title">제목</p>

    <ul className="todofin_ul">
      <TodoList />
      <TodoList />
      <TodoList />
    </ul>
  </div>
);

export default TodoFinish;

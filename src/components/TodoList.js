import React from 'react';
import styledComponents from 'styled-components';
import './todo.css';

const WhiteBox1 = styledComponents.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 0;
    width: 100%;
    background: white;
`;

const TodoList = () => (
  <WhiteBox1>
    <li className="todolist">
      <input type="checkbox" className="todolist_checkbox" />

      <span className="todolist_content">{TodoList.text}</span>

      <button type="button" className="todolist_btn">
        수정
      </button>

      <button type="button" className="todolist_del_btn">
        삭제
      </button>
    </li>
  </WhiteBox1>
);

export default TodoList;

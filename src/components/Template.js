// import React from 'react';
// import './todo.css';
// import TodoList from './TodoList';

// const TodoFinish = ({ title, todo, setTodo }) => (
//   <div className="todofin">
//     <p className="todofin_title">제목</p>

//     <ul className="todofin_ul">
//       <TodoList />
//       <TodoList />
//       <TodoList />
//     </ul>
//   </div>
// );

// export default Template;

import React from 'react';
import styledComponents from 'styled-components';
import './Template.css';

const WhiteBox1 = styledComponents.div`
width: 600px;
height: 880px;

position: relative;
background: white;
border-radius: 16px;
box-shadow: 0 0 8px 0 #83a7a3;

margin: 0 auto;

margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

const Template = ({ children, todoLength }) => {
  return (
    <WhiteBox1>
      {/* <h1>2022년 5/8 </h1>
      <div className="day">화요일</div> */}
      <div className="Template">
        <div className="Title">Todo List ({todoLength})</div>

        <div>{children}</div>
      </div>
      <div className="todo-left">남은 할 일 ()</div>
    </WhiteBox1>
  );
};

export default Template;

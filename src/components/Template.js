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
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding: 1rem;
    // margin: 0;
    // width: 100%;
    background: #acd890;
`;

const Template = ({ children, todoLength }) => {
  return (
    <WhiteBox1>
      <div className="Template">
        <div className="Title">Todo List ({todoLength})</div>
        <div>{children}</div>
      </div>
    </WhiteBox1>
  );
};

export default Template;

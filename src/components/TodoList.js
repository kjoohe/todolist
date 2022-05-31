// import React from 'react';
// import styledComponents from 'styled-components';
// import './todo.css';

// const WhiteBox1 = styledComponents.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 2rem;
//     margin: 0;
//     width: 100%;
//     background: white;
// `;

// const TodoList = () => (
//   <WhiteBox1>
//     <li className="todolist">
//       <input type="checkbox" className="todolist_checkbox" />

//       <span className="todolist_content">{TodoList.text}</span>

//       <button type="button" className="todolist_btn">
//         수정
//       </button>

//       <button type="button" className="todolist_del_btn">
//         삭제
//       </button>
//     </li>
//   </WhiteBox1>
// );

// export default TodoList;

import React from 'react';
import styledComponents from 'styled-components';
import TodoItem from './TodoItem';
import './TodoList.css';

const WhiteBox1 = styledComponents.div`
width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.32rem;
    margin: 0;
    width: 100%;
    background: white;
`;

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <WhiteBox1>
      <div className="Todolist">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onCheckToggle={onCheckToggle}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
          />
        ))}
      </div>
    </WhiteBox1>
  );
};

export default TodoList;

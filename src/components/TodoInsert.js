// import React, { useEffect, useRef, useState } from 'react';
// import './todo.css';
// import PropTypes from 'prop-types';

// const TodoInsert = ({ todo, setTodo }) => {
//   //input에 입력값을 가져올 수 있도록
//   const [text, setText] = useState('');

//   //1. useRef() 사용하여 ref 생성
//   const insertRef = useRef(null);

//   //input값 가져오기
//   const onChangeInsert = (e) => {
//     setText(e.target.value);
//   };

//   //2. 버튼 클릭했을때, 실행 메소드
//   //입력값을 지우고 input에 다시 포커싱이 되도록
//   const onClickAddButton = () => {
//     //todoFinish에 값 추가
//     const nextTodo = todo.concat({
//       // (2)
//       id: todo.length, // (2-1)
//       text, // (2-2)
//     });

//     setText(''); //초기값 "" 빈문자열
//     insertRef.current.focus();
//   };

//   useEffect(() => {
//     console.log(todo);
//   }, [todo]);

//   return (
//     <div className="todoinsert">
//       {/* 투두 내용 입력 */}
//       <input
//         type="text"
//         name="todoItem"
//         ref={insertRef} //ref 할당
//         value={text}
//         placeholder="오늘 할 일"
//         className="todoinsert_todobox"
//         onChange={onChangeInsert}
//       />
//       {/* 투두 추가 버튼 */}
//       {/* 버튼 클릭했을때 onClickAddButton() 메소드 실행 */}
//       <button
//         type="submit"
//         className="todoinsert_addbox"
//         onClick={onClickAddButton}
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default TodoInsert;

import React, { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiTrash, TiPencil } from 'react-icons/ti';
import './TodoInsert.css';

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                ontimeupdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder="할 일을 입력해주세요"
          value={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};
export default TodoInsert;

import React, { memo } from "react";

// 함수 컴포넌트에서는 this를 사용하지 않아도 된다.
// binding 안써도 되고 코드 중복을 줄일수 있다.
const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

//   import React, { PureComponent } from "react";
// // 동일한 단어 다중 선택 ctrl + d
// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();

//   onSubmit = event => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // 아래 둘다 같은 방식, form 설정이 정석적
//     // this.inputRef.current.value = "";
//     this.formRef.current.reset();
//   };

//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         {/* ref를 이용하면 서로 연결되어 해당 엘리먼트 내부에 접근 가능 */}
//         <input
//           ref={this.inputRef}
//           type="text"
//           className="add-input"
//           placeholder="Habit"
//         />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;

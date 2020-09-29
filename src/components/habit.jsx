import React, { PureComponent } from "react";

// Reactjs code snippets을 사용하면 단축키를 이용해서 component 구조를 쉽게 생성 가능.
// 원하는 파일로 이동하고 싶을 때는 ctrl + p로 찾아서 이동.

// 컴포넌트 내부 클래스의 이름은 항상 대문자로 시작하게 설정.
class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  // class내부의 arrow 함수의 경우 내부의 값을 한번만 만들고 변수에 할당되기 때문에 한번만 생성이 된다.
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // Object destructuring
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          // 문제점이 있다. 렌더 함수는 데이터가 변경할 때마다 재 시작한다.
          // 렌더 함수가 호출되어 리 렌더링될때만다 함수가 계속 생성된다. 불필요한 함수 생성이 발생함.
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

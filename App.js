import "./App.css";
//JSX 문법 : JavaScript에 XML 문법을 확장한 것
//1. 반드시 감싸인 요소로 구현되어야 함
//2. 조건부 연산자 사용 가능(반복문 같은건 불가능)

//Welcome 컴포넌트를 불러옴
import Welcome from "./Welcome";
import Say from "./Say";
import EventPratice from "./EventPratice";
import DropDownComponent from "./DropDownComponent";
import RadioComponent from "./RadioComponent";
import TableComponent from "./TableComponent";
import IterationSample from "./IterationSample";
import BoardList from "./BoardList";
function App() {
  // return (
  //   //하나의 태그로 넘겨주어야하기때문에 빈태그로라도 하나도 묶어준다.
  //   <>
  //     <h1>리액트 구현</h1>
  //     <h3>잘 작동하는가</h3>
  //   </>
  // );

  //조건부
  // const name = "리액트d";
  // return <>{name === "리액트" ? <h1>ff</h1> : <h1>ddwd</h1>}</>;
  //많이 쓰이는 문법
  // const name = "테스트";
  // return <>{name === "리액트" || <h1>fff</h1>}</>;
  //props 사용하기 : properties의 줄임말(키와 값이 객체 내부에 담겨있는 형태 )
  //부모 컴포넌트에서 작식 컴포넌트로 전달되는 데이터를 의미

  // const name = "조해민";
  // const age = 23;
  // return (
  //   <>
  //     <Welcome name={name} age={age} />
  //   </>
  // );
  const name = "조해민";
  const age = 20;
  return <BoardList />;
}

export default App;
//자바스크립트 var , let , const
//var es6이전에 사용되는 문법 : 자동으로 호이스팅 되는 특성이 있다.

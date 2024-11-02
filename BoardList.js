import { useState } from "react";

const BoardList = () => {
  const [board, setboard] = useState([
    { title: "어린왕자", content: "어린왕자 이야기" },
    { title: "백설공주", content: "난쟁이들" },
    { title: "신데렐라", content: "유리구두" },
  ]);

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  //e: 발생한 input창
  const titleChange = (e) => setInputTitle(e.target.value);
  const contentChange = (e) => setInputContent(e.target.value);

  const onClick = () => {
    const boardList = board.concat({
      title: inputTitle,
      content: inputContent,
    });
    setboard(boardList);
    setInputTitle("");
    setInputContent("");
  };
  //삭제
  const onRemove = () => {
    //삭제하려는 제목이 아닌 board들만 다시 담는다
    const nextBoard = board.filter((board) => board.title !== inputTitle);
    setboard(nextBoard);
    setInputTitle("");
  };
  const boardList = board.map((e) => (
    <li>
      {e.title} , {e.content}
    </li>
  ));
  return (
    <>
      <input
        type="text"
        value={inputTitle}
        onChange={titleChange}
        placeholder="제목"
      />
      <br />
      <input
        type="text"
        value={inputContent}
        onChange={contentChange}
        placeholder="내용"
      />
      <br />
      <button onClick={onClick}>추가하기</button>
      <button onClick={onRemove}>제거하기</button>
      <ul>{boardList}</ul>
    </>
  );
};
export default BoardList;

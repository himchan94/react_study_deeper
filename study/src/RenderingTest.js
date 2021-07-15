import React from "react";

// 리액트에서 setState는 비동기적으로 업데이트됨
// 다음 렌더링 컴포넌트 실행시 어떻게 동작할지 생각해보자

const Rendering = () => {
  const [text, setText] = React.useState(0);
  console.log("text", text);

  React.useEffect(() => {
    console.log("렌더링됨");
    console.log(text);

    return () => {
      console.log("컴포넌트 사라짐");
      console.log(text);
    };
  });

  return (
    <React.Fragment>
      {text}
      <button
        onClick={() => {
          setText(text + 1);
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          setText(text - 1);
        }}
      >
        minus
      </button>
    </React.Fragment>
  );
};

export default Rendering;

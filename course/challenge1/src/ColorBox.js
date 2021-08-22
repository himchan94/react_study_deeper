import React, { useRef } from "react";

const ColorBox = ({ color }) => {
  const colorRef = useRef();

  React.useEffect(() => {
    colorRef.current.style.backgroundColor = color;
  });

  return (
    <div className="colorBox" ref={colorRef}>
      컬러박스
    </div>
  );
};

export default ColorBox;

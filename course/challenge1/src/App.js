import React from "react";

import ColorBox from "./ColorBox";
import InputBox from "./InputBox";

function App() {
  const [color, setColor] = React.useState("");
  return (
    <React.Fragment>
      <ColorBox color={color ? color : null} />
      <InputBox setColor={setColor} />
    </React.Fragment>
  );
}

export default App;

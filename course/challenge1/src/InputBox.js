const InputBox = ({ setColor }) => {
  return (
    <div className="inputBox">
      <lable htmlFor="colorInput">컬러 :</lable>
      <input id="colorInput" onChange={(e) => setColor(e.target.value)}></input>
    </div>
  );
};

export default InputBox;

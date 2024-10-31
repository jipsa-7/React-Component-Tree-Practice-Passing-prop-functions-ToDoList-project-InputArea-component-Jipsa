import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.onChangefunction}
        type="text"
        value={props.textitem}
      />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

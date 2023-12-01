import React from "react";

function InputArea(props){
    return (
        <form className="form" onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} type="text" value={props.item}/>
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    )
}

export default InputArea;
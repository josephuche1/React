import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className="create-note">
        <input name="title" placeholder="Title" onChange={props.handleChange} value={props.note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.handleChange} value={props.note.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [newState, setState] = useState(false);

  function handleClick(){
    setState(true);
  }
  return (
    <div>
      <form onSubmit={props.handleSubmit} className="create-note">
        {newState && <input name="title" placeholder="Title" onChange={props.handleChange} value={props.note.title}/>}
        <textarea name="content" placeholder="Take a note..." rows={newState? "3" : "1" } onChange={props.handleChange} value={props.note.content} onClick={handleClick}/>
        <Zoom in={newState}><Fab type={"submit"}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

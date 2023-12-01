import React, {useState} from "react";

function ListItem(props){
    const [isDone, setIsDone] = useState(false);

    
    function handleClick(){
        setIsDone((isDone) => {
            return !isDone;
        });
    }
    
    return (
        <li style={{textDecoration: isDone && "line-through"}} onClick={handleClick}>{props.item}</li>
    );
}

export default ListItem;
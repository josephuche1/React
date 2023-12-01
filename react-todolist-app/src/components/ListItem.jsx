import React, {useState} from "react";

function ListItem(props){

    function handleClick(){
    }
    
    return (
        <li onClick={() => {
            props.onChecked(props.id)
        }}>{props.item}</li>
    );
}

export default ListItem;
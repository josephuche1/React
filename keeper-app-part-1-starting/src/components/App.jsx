import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import noti from "../notes";
import CreateArea from "./CreateArea";

function App(){
    const [note, SetNote] = useState({
        title:"",
        content:""
    });
    const [notes, updateNotes] = useState([]);

    function handleChange(event){
        const {name, value} = event.target;
        
        SetNote((note) => {
            return {
                ...note,
                [name]: value
            };
        });
    }

    function handleSubmit(event){
        updateNotes((notes) => {
            return [...notes, note];
        });

        SetNote(() => {
            return {
                title:"",
                content:""
            }
        })
        event.preventDefault();
    }

    function deleteNote(id){
        updateNotes(() => {
            return notes.filter((note, index) => {
                return index !== id;
            });
        })
    }
    return (
        <div>
            <Header />
            <CreateArea 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                note={note}
            />
            {notes.map((note, index) => {
                return (
                    <Note 
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        delete={deleteNote}
                    />
                )
            })}
            <Footer />
        </div>
    )
}

export default App;
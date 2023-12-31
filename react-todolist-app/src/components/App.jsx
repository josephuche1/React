import React, {useState} from "react";
import ListItem from "./ListItem";
import InputArea from "./InputArea"


function App() {

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
      const {value} = event.target;
      setItem(value);
  }

  function handleSubmit(event){
      const newItem = {
         id: items.length,
         item: item
      }
      setItems((items) => {
        return [...items, newItem];
      });
      setItem("");
      event.preventDefault();
  }

  function deleteItem(id){
    setItems((items) => {
        
         return items.filter((item, index) => {
             return index !== id;
         });
        
    });
    console.log(items);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        item={item}
      />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
               <ListItem 
                    key={index}
                    id={index}
                    item={item.item}
                    onChecked={deleteItem}
                />
          );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import ListItem from "./ListItem";


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

  function createItems(item){
    return (
        <ListItem 
            key={item.id}
            item={item.item}
        />
    );
}



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={item}/>
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {items.map(createItems)}
        </ul>
      </div>
    </div>
  );
}

export default App;

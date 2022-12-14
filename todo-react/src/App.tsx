import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import { List, Paper, Container } from "@mui/material";
import AddTodo from "./AddTodo";
export interface itemData {
  id: string;
  title: string;
  done: boolean;
}
function App() {
  const [items, setItem] = useState<itemData[]>([]);

  const addItem = (item: itemData) => {
    item.id = "ID-" + items.length; // key를 위한 id
    item.done = false; // done 초기화
    //업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다.
    setItem([...items, item]);
    console.log("items: ", items);
  };

  const deleteItem = (item: itemData) => {
    //삭제할 아이템을 찾는다.
    const newItems = items.filter((e) => e.id !== item.id);
    //삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    setItem([...newItems]);
  };

  const editItem = () => {
    setItem([...items]);
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          ></Todo>
        ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import {
  ListItem,
  Checkbox,
  ListItemText,
  InputBase,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import { itemData } from "./App";
interface Props {
  item: { id: string; title: string; done: boolean };
  deleteItem: (item: itemData) => void;
  editItem: () => void;
}

const Todo = ({ item, deleteItem, editItem }: Props) => {
  const [itemTodo, setItemTodo] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  //turnOffReadOnly 함수 작성
  const turnOffReadOnly = () => {
    setReadOnly(false);
  };

  //deleteEventHandler 작성
  const deleteEventHandler = () => {
    deleteItem(item);
  };

  //turnOnReadOnly 함수 작성
  const turnOnReadOnly = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  //editHandler 작성
  const editEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    item.title = e.target.value;
    editItem();
  };

  const checkboxEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    item.done = e.target.checked;
    editItem();
  };

  return (
    <ListItem>
      <Checkbox onChange={checkboxEventHandler} checked={item.done} />
      <ListItemText>
        <InputBase
          onChange={editEventHandler}
          onKeyDown={turnOnReadOnly}
          inputProps={{ "aria-label": "naked", readOnly: readOnly }}
          onClick={turnOffReadOnly}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={deleteEventHandler} aria-label="Delete Todo">
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;

import React from "react";
import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { itemData } from "./App";

interface Props {
  addItem: (item: itemData) => void;
}

const AddTodo = ({ addItem }: Props) => {
  // 사용자의 입력을 저장할 오브젝트
  const [item, setItem] = useState<any>({ title: "" });

  //onButtonClick 함수 작성
  const onButtonClick = () => {
    addItem(item); // addItem함수 사용
    setItem({ title: "" });
  };

  //enterKeyEventHandler 함수
  const enterKeyEventHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  //onInputChange 함수 작성
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ title: e.target.value });
    console.log(item);
  };

  //onInputChange 함수 TextField에 연결

  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          onChange={onInputChange}
          value={item.title}
          onKeyPress={enterKeyEventHandler}
        />
      </Grid>
      <Grid xs={1} md={1} item>
        <Button
          fullWidth
          style={{ height: "100%" }}
          color="secondary"
          variant="outlined"
          onClick={onButtonClick}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;

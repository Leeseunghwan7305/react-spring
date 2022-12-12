package com.example.reactspring.controller;

import com.example.reactspring.dto.ResponseDTO;
import com.example.reactspring.dto.TodoDTO;
import com.example.reactspring.model.TodoEntity;
import com.example.reactspring.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("todo")
public class TodoController {
    //testTodo 메서드 작성하기
    private  final TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }

    @GetMapping("/test")
    public ResponseEntity<?> testTodo(){
        String str =service.testService();
        List<String> list = new ArrayList<>();
        list.add(str);
        ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
        return ResponseEntity.ok().body(response);

    }
    @GetMapping
    public  ResponseEntity<?> retrieveTodoList()
    {
        String temporaryUserId="temporary-user";

        List<TodoEntity> entities=service.retrieve(temporaryUserId);

        List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

        ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

        return ResponseEntity.ok().body(response);
    }

    @PostMapping
    public ResponseEntity<?> createTodo(@RequestBody TodoDTO dto){
        try{
            String temporaryUserId="temporary-user" ;

            TodoEntity entity = TodoDTO.toEntity(dto);

            entity.setId(null);

            entity.setUserId(temporaryUserId);

            List<TodoEntity> entities = service.create(entity);

            List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO> builder().data(dtos).build();

            return ResponseEntity.ok().body(response);
        } catch(Exception e){
            String error =e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }


    }
    @PutMapping
    public ResponseEntity<?> updateTodo(@RequestBody TodoDTO dto){

        String temporaryUserId ="temporary-user";

        TodoEntity entity = TodoDTO.toEntity(dto);

        entity.setUserId(temporaryUserId);

        List<TodoEntity> entities = service.update(entity);

        List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

        ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteTodo(@RequestBody TodoDTO dto){
        try{
            String temporaryUserId="temporary-user";

            TodoEntity entity = TodoDTO.toEntity(dto);

            entity.setUserId(temporaryUserId);

            List<TodoEntity> entities = service.delete(entity);

            List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e){
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }
}

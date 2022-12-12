package com.example.reactspring.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.reactspring.model.TodoEntity;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TodoDTO {
    private String id;
    private String title;
    private boolean done;

    public TodoDTO(final TodoEntity entity)
    {
        this.id=entity.getId();
        this.title=entity.getTitle();
        this.done=entity.isDone();
    }
}

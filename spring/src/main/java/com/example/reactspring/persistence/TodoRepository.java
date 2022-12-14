package com.example.reactspring.persistence;

import com.example.reactspring.model.TodoEntity;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity,String> {


    List<TodoEntity> findByUserId(String userId);
}

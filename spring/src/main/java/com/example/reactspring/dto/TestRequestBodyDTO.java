package com.example.reactspring.dto;

import lombok.Data;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Data
public class TestRequestBodyDTO {

    private int id;
    private String message;


}

package com.example.app.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private List<String> users = new ArrayList<>();

    @GetMapping
    public List<String> getAllUsers() {
        return users;
    }

    @PostMapping
    public ResponseEntity<String> addNewUser(@RequestBody String user) {
        users.add(user);
        return ResponseEntity.status(200).body(user);
    }

}

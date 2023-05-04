package com.gogo.base.controllers;

import com.gogo.base.models.User;
import com.gogo.base.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAll();
    }


    @GetMapping
    public User getUser(@RequestBody String username) {
        return userService.getByUsername(username);
    }


    @GetMapping("/{id}")
    public User getUserById(@PathVariable(value = "id") UUID id) {
        return userService.getById(id);
    }
}

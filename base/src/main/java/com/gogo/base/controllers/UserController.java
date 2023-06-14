package com.gogo.base.controllers;

import com.gogo.base.models.User;
import com.gogo.base.repository.UserRepository;
import com.gogo.base.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;


    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllUsers(@RequestParam(defaultValue = "0") int page,
                                                           @RequestParam(defaultValue = "15") int size) {

        try {
            Pageable paging = PageRequest.of(page, size);

            Page<User> pageTuts;
            pageTuts = userRepository.findAll(paging);

            Map<String, Object> response = new HashMap<>();
            response.put("users", pageTuts.getContent());
            response.put("currentPage", pageTuts.getNumber());
            response.put("totalItems", pageTuts.getTotalElements());
            response.put("totalPages", pageTuts.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/username/{username}")
    public User getUser(@PathVariable(value = "username") String username) {
        return userService.getByUsername(username);
    }


    @GetMapping("/{id}")
    public User getUserById(@PathVariable(value = "id") UUID id) {
        return userService.getById(id);
    }
}

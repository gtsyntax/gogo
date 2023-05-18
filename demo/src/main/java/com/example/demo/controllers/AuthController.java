package com.example.demo.controllers;

import com.example.demo.dtos.NewCustomerRequest;
import com.example.demo.dtos.CustomerAuthResponse;
import com.example.demo.models.Customer;
import com.example.demo.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final CustomerService customerService;
    @PostMapping("/customers/register")
    public ResponseEntity<CustomerAuthResponse> register(@RequestBody NewCustomerRequest newCustomerRequest) {
        return ResponseEntity.ok(customerService.signUpCustomer(Customer.builder()
                .firstName(newCustomerRequest.getFirstName())
                .lastName(newCustomerRequest.getLastName())
                .email(newCustomerRequest.getEmail())
                .password(newCustomerRequest.getPassword())
                .phone(newCustomerRequest.getPhone())
                .build()));
    }
}

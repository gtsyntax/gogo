package com.example.demo.controllers;

import com.example.demo.dtos.NewCustomerRequest;
import com.example.demo.dtos.NewCustomerToken;
import com.example.demo.models.ConfirmationToken;
import com.example.demo.models.Customer;
import com.example.demo.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customers")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void signUpNewCustomer(@RequestBody NewCustomerRequest newCustomerRequest) {
        customerService.signUpCustomer(Customer.builder()
                .firstName(newCustomerRequest.getFirstName())
                .lastName(newCustomerRequest.getLastName())
                .email(newCustomerRequest.getEmail())
                .password(newCustomerRequest.getPassword())
                .phone(newCustomerRequest.getPhone())
                .build());
    }

    @PostMapping("/verify")
    @ResponseStatus(HttpStatus.CREATED)
    public void verifyNewCustomer(@RequestBody NewCustomerToken customerToken) {
        customerService.confirmCustomer(ConfirmationToken.builder()
                .confirmationToken(customerToken.getToken()).build());
    }
}

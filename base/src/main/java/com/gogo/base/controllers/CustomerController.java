package com.gogo.base.controllers;

import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Customer;
import com.gogo.base.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable(name = "id") UUID id){
        return customerService.getCustomerById(id).orElseThrow(NotFoundException::new);
    }
}

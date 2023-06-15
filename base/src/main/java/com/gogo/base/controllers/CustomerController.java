package com.gogo.base.controllers;

import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Address;
import com.gogo.base.models.Customer;
import com.gogo.base.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable(name = "id") UUID id) {
        return customerService.getCustomerById(id).orElseThrow(NotFoundException::new);
    }

    @PostMapping("/address/{customer_id}")
    public void setAddress(@RequestBody Address address, @PathVariable("customer_id") UUID customerId) {
        customerService.setAddress(customerId, address);
    }

    @GetMapping("/address/{customer_id}")
    public Address getAddressByCustomerId(@PathVariable(name = "customer_id") UUID customerId) {
        return customerService.getAddress(customerId);
    }

}

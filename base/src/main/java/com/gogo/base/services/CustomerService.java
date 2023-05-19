package com.gogo.base.services;

import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Customer;
import com.gogo.base.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;


    public Optional<Customer> getCustomerById(UUID id) {
        return customerRepository.findById(id);
    }

    public void assignCart(UUID customerId, UUID cartId) {
        Customer customer = this.getCustomerById(customerId).orElseThrow(NotFoundException::new);
        customer.getCart().add(cartId);
        customerRepository.save(customer);
    }

}

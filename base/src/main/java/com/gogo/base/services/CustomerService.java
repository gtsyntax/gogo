package com.gogo.base.services;

import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Customer;
import com.gogo.base.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
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
        Set<UUID> cart = customer.getCart();
        if (cart == null) {
            cart = new HashSet<>();
            customer.setCart(cart);
        }

        cart.add(cartId);
        customerRepository.save(customer);
    }

}

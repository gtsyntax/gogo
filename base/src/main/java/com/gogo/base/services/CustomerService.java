package com.gogo.base.services;

import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Address;
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

    public void setAddress(UUID customerId, Address address_param) {
        Customer customer = this.getCustomerById(customerId).orElseThrow(NotFoundException::new);
        Address address = customer.getAddress();
        if (address_param.getAddress1() != null)
            address.setAddress1(address_param.getAddress1());
        if (address_param.getAddress2() != null)
            address.setAddress2(address_param.getAddress2());
        if (address_param.getCity() != null)
            address.setCity(address_param.getCity());
        if (address_param.getCountry() != null)
            address.setCountry(address_param.getCountry());
        if (address_param.getPostalCode() != null)
            address.setPostalCode(address_param.getPostalCode());
        customer.setAddress(address);
        customerRepository.save(customer);
    }

    public Address getAddress(UUID customerId) {
        return this.getCustomerById(customerId).orElseThrow(NotFoundException::new).getAddress();
    }
}

package com.gogo.base.services;

import com.gogo.base.dto.CustomerDto;
import com.gogo.base.dto.NewUserRequest;
import com.gogo.base.enumerations.RoleType;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Customer;
import com.gogo.base.models.User;
import com.gogo.base.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;
    private final UserService userService;

    public boolean createNewCustomer(CustomerDto customerDto){
        NewUserRequest newUserRequest = NewUserRequest.builder()
                .username(customerDto.getUsername())
                .email(customerDto.getEmail())
                .password(customerDto.getPassword())
                .build();
        userService.createNewUser(newUserRequest);
        User user = userService.getByUsername(customerDto.getUsername());
        Customer newCustomer = Customer.builder()
                .id(user.getId())
                .firstName(customerDto.getFirstName())
                .lastName(customerDto.getLastName())
                .phone(customerDto.getPhone())
                .build();
        customerRepository.save(newCustomer);
        List<RoleType> roles = new ArrayList<RoleType>();
        roles.add(RoleType.ROLE_CUSTOMER);
        boolean verifier = userService.assignRoleToUser(customerDto.getUsername(), roles);
        if(verifier)
            return true;
        return false;
    }

    public Optional<Customer> getCustomerById(UUID id){
        return customerRepository.findById(id);
    }

    public void assignCart(UUID customerId, UUID cartId){
        Customer customer = this.getCustomerById(customerId).orElseThrow(NotFoundException::new);
        customer.getCart().add(cartId);
        customerRepository.save(customer);
    }

}

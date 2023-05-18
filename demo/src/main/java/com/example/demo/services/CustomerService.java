package com.example.demo.services;

import com.example.demo.config.JwtService;
import com.example.demo.dtos.CustomerAuthResponse;
import com.example.demo.models.ConfirmationToken;
import com.example.demo.models.Customer;
import com.example.demo.repository.CustomerRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService implements UserDetailsService {
    private final CustomerRepository customerRepository;
    private final ConfirmationTokenService confirmationTokenService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtService jwtService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final Optional<Customer> optionalCustomer = customerRepository.findByEmail(email);

        if (optionalCustomer.isPresent()) {
            return optionalCustomer.get();
        } else {
            throw new UsernameNotFoundException(MessageFormat.format("Customer with email {0} cannot be found.", email));
        }
    }

    public CustomerAuthResponse signUpCustomer(Customer customer) {
        final String encryptedPassword =  bCryptPasswordEncoder.encode(customer.getPassword());
        customer.setPassword(encryptedPassword);
        final Customer createdCustomer = customerRepository.save(customer);
        var jwtToken = jwtService.generateToken(createdCustomer);
        final ConfirmationToken confirmationToken = new ConfirmationToken(customer);
        confirmationTokenService.saveConfirmationToken(confirmationToken);
        return CustomerAuthResponse.builder()
                .jwtToken(jwtToken)
                .build();
    }

    public void confirmCustomer(ConfirmationToken confirmationToken) {
        final Customer customer = confirmationToken.getCustomer();
        customer.setEnabled(true);
        customerRepository.save(customer);
        confirmationTokenService.deleteConfirmationToken(confirmationToken.getId());
    }
}

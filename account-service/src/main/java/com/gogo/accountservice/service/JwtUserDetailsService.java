package com.gogo.accountservice.service;

import com.gogo.accountservice.dto.MyUserDetails;
import com.gogo.accountservice.exception.NotFoundException;
import com.gogo.accountservice.model.User;
import com.gogo.accountservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JwtUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public MyUserDetails loadUserByUsername(String username) {

        final User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException("User not found"));
        final List<String> roles = user.getRoles().stream().map(role -> role.getName().name()).toList();
        return new MyUserDetails(user.getId(), user.getUsername(), user.getPassword(), roles);
    }
}

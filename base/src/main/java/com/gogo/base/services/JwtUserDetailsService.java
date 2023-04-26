package com.gogo.base.services;

import com.gogo.base.dto.MyUserDetails;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.User;
import com.gogo.base.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import lombok.RequiredArgsConstructor;
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

package com.gogo.accountservice.controller;

import com.gogo.accountservice.config.JwtTokenUtil;
import com.gogo.accountservice.dto.CredentialsDto;
import com.gogo.accountservice.dto.MyUserDetails;
import com.gogo.accountservice.dto.NewUserRequest;
import com.gogo.accountservice.dto.UserDto;
import com.gogo.accountservice.service.JwtUserDetailsService;
import com.gogo.accountservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUserDetailsService userDetailsService;
    private final JwtTokenUtil jwtTokenUtil;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody CredentialsDto authenticationRequest) throws Exception {

        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));

        if (authenticate.isAuthenticated()) {
            final MyUserDetails userDetails = userDetailsService
                    .loadUserByUsername(authenticationRequest.getUsername());

            final String token = jwtTokenUtil.generateToken(userDetails);

            return ResponseEntity.ok(new UserDto(userDetails.getId(), userDetails.getUsername(), token));
        } else {
            throw new RuntimeException("invalid access");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> createNewUser(@RequestBody NewUserRequest newUserRequest) {
        userService.createNewUser(newUserRequest);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }

//    @PostMapping("/validateToken")
//    public ResponseEntity<UserDto> signIn(@RequestParam String token) {
//        log.info("Trying to validate token {}", token);
//        return ResponseEntity.ok(userService.validateToken(token));
//    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}

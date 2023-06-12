package com.gogo.base.controllers;

import com.gogo.base.config.JwtTokenUtil;
import com.gogo.base.dto.CredentialsDto;
import com.gogo.base.dto.MyUserDetails;
import com.gogo.base.dto.NewUserDto;
import com.gogo.base.dto.UserDto;
import com.gogo.base.services.JwtUserDetailsService;
import com.gogo.base.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final MyUserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new UserDto(userDetails.getId(), userDetails.getUsername(), token));

    }

    @PostMapping("/register")
    public ResponseEntity<?> createNewUser(@RequestBody NewUserDto newUserDto) {
        boolean verifier = userService.createNewUser(newUserDto);
        if (verifier)
            return ResponseEntity.ok(HttpStatus.CREATED);
        return new ResponseEntity<>("An error occurred while creating user.", HttpStatus.INTERNAL_SERVER_ERROR);
    }

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

package com.gogo.accountservice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

/*
 * Jwt generateToken wants UserDetails as Parameter
 *
 */

@Getter
@Setter
@NoArgsConstructor
public class MyUserDetails implements UserDetails {

    private UUID id;

    private String username;

    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public MyUserDetails(UUID id, String username, String password, List<String> roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = roles.stream().map(role -> new SimpleGrantedAuthority(role.toString())).toList();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    public UUID getId() {
        return this.id;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

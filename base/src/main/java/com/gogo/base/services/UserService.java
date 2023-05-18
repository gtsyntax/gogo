package com.gogo.base.services;

import com.gogo.base.dto.NewUserRequest;
import com.gogo.base.enumerations.RoleType;
import com.gogo.base.exceptions.AlreadyExistException;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.mapper.UserMapper;
import com.gogo.base.models.Role;
import com.gogo.base.models.User;
import com.gogo.base.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;


    public void createNewUser(NewUserRequest newUserRequest) {


        Objects.requireNonNull(newUserRequest, "User cannot be null");

        if (userRepository.existsUserByUsername(newUserRequest.getUsername())) {
            throw new AlreadyExistException("Username already exists: " + newUserRequest.getUsername());
        }
        if (userRepository.existsUserByEmail(newUserRequest.getEmail())) {
            throw new AlreadyExistException("Email already exists: " + newUserRequest.getEmail());
        }

        User user = userMapper.toUser(newUserRequest);
        user.setPassword(passwordEncoder.encode(newUserRequest.getPassword()));
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        userRepository.save(user);
    }

    public User getByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(NotFoundException::new);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Transactional //Annotation will create a hibernate session with a certain scope
    public boolean assignRoleToUser(String username, List<RoleType> roleTypes) {
        final User user = userRepository.findByUsername(username).orElseThrow(() -> new NotFoundException("User not found"));

        List<Role> roles = new ArrayList<>();
        roleTypes.forEach(roleType -> roles.add(roleService.findByName(roleType)));

        user.setRoles(new ArrayList<Role>(roles));
        //roles.forEach(role -> user.getRoles().add(role));

        userRepository.save(user);
        return Boolean.TRUE;
    }

    public User getById(UUID id){
        return userRepository.findById(id).orElseThrow(NotFoundException::new);
    }
}

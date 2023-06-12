package com.gogo.base.services;

import com.gogo.base.dto.NewUserDto;
import com.gogo.base.dto.UserBaseRequest;
import com.gogo.base.enumerations.RoleType;
import com.gogo.base.exceptions.AlreadyExistException;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.mapper.UserMapper;
import com.gogo.base.models.*;
import com.gogo.base.repository.CourierRepository;
import com.gogo.base.repository.CustomerRepository;
import com.gogo.base.repository.PartnerRepository;
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
    private final CustomerRepository customerRepository;
    private final PartnerRepository partnerRepository;
    private final CourierRepository courierRepository;


    public boolean createNewUser(NewUserDto newUserDto) {
        UserBaseRequest newUserRequest = UserBaseRequest.builder()
                .username(newUserDto.getUsername())
                .email(newUserDto.getEmail())
                .password(newUserDto.getPassword())
                .build();
        this.createUserBase(newUserRequest);
        User user = this.getByUsername(newUserDto.getUsername());
        List<RoleType> roles = new ArrayList<RoleType>();
        switch (newUserDto.getRole()) {
            case "customer":
                Customer newCustomer = Customer.builder()
                        .id(user.getId())
                        .firstName(newUserDto.getFirstName())
                        .lastName(newUserDto.getLastName())
                        .phone(newUserDto.getPhone())
                        .build();
                customerRepository.save(newCustomer);
                roles.add(RoleType.ROLE_CUSTOMER);
                break;
            case "partner":
                Partner newPartner = Partner.builder()
                        .id(user.getId())
                        .firstName(newUserDto.getFirstName())
                        .lastName(newUserDto.getLastName())
                        .phone(newUserDto.getPhone())
                        .build();
                partnerRepository.save(newPartner);
                roles.add(RoleType.ROLE_PARTNER);
                break;
            case "courier":
                Courier newCourier = Courier.builder()
                        .id(user.getId())
                        .firstName(newUserDto.getFirstName())
                        .lastName(newUserDto.getLastName())
                        .phone(newUserDto.getPhone())
                        .build();
                courierRepository.save(newCourier);
                roles.add(RoleType.ROLE_COURIER);
                break;
            default:
                return false;
        }
        boolean verifier = this.assignRoleToUser(newUserDto.getUsername(), roles);
        if (verifier)
            return true;
        return false;
    }

    public void createUserBase(UserBaseRequest newUserRequest) {


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
        try {
            final User user = userRepository.findByUsername(username).orElseThrow(() -> new NotFoundException("User not found"));

            List<Role> roles = new ArrayList<>();
            roleTypes.forEach(roleType -> roles.add(roleService.findByName(roleType)));

            user.setRoles(new ArrayList<Role>(roles));
            //roles.forEach(role -> user.getRoles().add(role));

            userRepository.save(user);
            return Boolean.TRUE;

        }catch (Exception e){
            return Boolean.FALSE;
        }
    }

    public User getById(UUID id) {
        return userRepository.findById(id).orElseThrow(NotFoundException::new);
    }
}

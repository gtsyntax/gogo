package com.gogo.base.config;


import com.gogo.base.dto.NewUserRequest;
import com.gogo.base.enumerations.RoleType;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Role;
import com.gogo.base.models.User;
import com.gogo.base.services.RoleService;
import com.gogo.base.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
@Configuration
public class InitConfig {
    private final UserService userService;
    private final RoleService roleService;

    @Bean
    public CommandLineRunner initAdmin() {
        return args -> {
            final List<RoleType> roles = roleService.getAllRoles().stream().map(Role::getName).toList();

            Arrays.stream(RoleType.values()).filter(roleType -> !roles.contains(roleType)).forEach(roleType -> {
                Role role = new Role();
                role.setName(roleType);
                roleService.createNewRole(role);
            });

            try {
                final User adminUser = userService.findByUsername("sys.admin");

            } catch (NotFoundException e) {
                NewUserRequest adminUser = new NewUserRequest();
                adminUser.setUsername("sys.admin");
                adminUser.setEmail("admin@gogo.com");
                adminUser.setPassword("admin123");
                userService.createNewUser(adminUser);
                userService.assignRoleToUser(adminUser.getUsername(), List.of(RoleType.ROLE_ADMIN));
            } catch (IllegalStateException e) {
                System.out.println("illegal state exception");
            }
        };
    }
}

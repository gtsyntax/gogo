package com.gogo.base.services;

import com.gogo.base.enumarations.RoleType;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Role;
import com.gogo.base.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public List<Role> getAllRoles() {
        return (List<Role>) roleRepository.findAll();
    }

    public Role findByName(RoleType type) {
        return roleRepository.findRoleByName(type).orElseThrow(() -> new NotFoundException("Role not found"));
    }

    public void createNewRole(Role role) {
        Optional<Role> existRole = roleRepository.findRoleByName(role.getName());

        if (!existRole.isPresent()) {
            roleRepository.save(role);
        }
    }
}

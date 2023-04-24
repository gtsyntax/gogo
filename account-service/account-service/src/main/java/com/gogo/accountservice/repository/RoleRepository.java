package com.gogo.accountservice.repository;

import com.gogo.accountservice.enumaration.RoleType;
import com.gogo.accountservice.model.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, Long> {
    Optional<Role> findRoleByName(RoleType type);
}

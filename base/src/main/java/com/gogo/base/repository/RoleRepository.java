package com.gogo.base.repository;

import com.gogo.base.enumarations.RoleType;
import com.gogo.base.models.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, Long> {
    Optional<Role> findRoleByName(RoleType type);
}

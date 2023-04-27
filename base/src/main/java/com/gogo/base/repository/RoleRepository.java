package com.gogo.base.repository;

import com.gogo.base.enumerations.RoleType;
import com.gogo.base.models.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    Optional<Role> findRoleByName(RoleType type);
}

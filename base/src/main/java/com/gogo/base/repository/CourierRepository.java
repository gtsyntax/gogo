package com.gogo.base.repository;

import com.gogo.base.models.Courier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CourierRepository extends JpaRepository<Courier, UUID> {

    Page<Courier> findByShopId(Pageable pageable, UUID shopId);
}

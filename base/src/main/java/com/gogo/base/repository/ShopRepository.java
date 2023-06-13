package com.gogo.base.repository;

import com.gogo.base.models.Product;
import com.gogo.base.models.Shop;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ShopRepository extends JpaRepository<Shop, UUID> {
    Page<Shop> findAll(Pageable pageable);
    Optional<Shop> findByShopOwner(UUID shopOwnerId);

}

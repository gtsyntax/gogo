package com.gogo.base.repository;

import com.gogo.base.enumerations.CartStatus;
import com.gogo.base.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CartRepository extends JpaRepository<Cart, UUID> {
    List<Cart> findByStatus(CartStatus status);
    List<Cart> findByStatusAndUserId(CartStatus status, UUID userId);
}

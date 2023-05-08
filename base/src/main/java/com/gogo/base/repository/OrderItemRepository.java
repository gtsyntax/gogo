package com.gogo.base.repository;

import com.gogo.base.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, UUID> {
    List<OrderItem> findByCartId(UUID cartId);

    List<UUID> findProductIdByCartId(UUID cartId);
}

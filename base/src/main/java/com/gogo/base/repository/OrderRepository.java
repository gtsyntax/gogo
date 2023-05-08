package com.gogo.base.repository;

import com.gogo.base.enumerations.OrderStatus;
import com.gogo.base.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {
    Order findByShopIdAndCartIdAndStatus(UUID shopId, UUID cartId, OrderStatus status);

    List<Order> findByShopId(UUID shopId);

    List<Order> findByShopIdAndStatus(UUID shopId, OrderStatus status);
}

package com.gogo.base.services;

import com.gogo.base.enumerations.OrderStatus;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Address;
import com.gogo.base.models.Order;
import com.gogo.base.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final CartService cartService;

    public void createOrder(UUID cartId) {
        Order order = new Order();
        order.setStatus(OrderStatus.NEW);

        orderRepository.save(order);
    }

    public Order getOrder(UUID id) {
        return orderRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public void setAddress(UUID orderId, Address address) {
        final Order order = this.getOrder(orderId);
        if (!(address == null)) {
            order.setDeliveryAddress(address);
        }
        orderRepository.save(order);
    }

    //TODO better status update (with APIs)
    public void setStatus(UUID orderId, OrderStatus status, String note) {
        final Order order = this.getOrder(orderId);
        order.setStatus(status);
        order.setNote(note);
        orderRepository.save(order);
    }


}

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

    public void createOrder(UUID cartId) {
        Order order = new Order();
        order.setStatus(OrderStatus.NEW);
        order.setCartId(cartId);

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

    public boolean setStatus(UUID orderId, String status, String note) {
        final Order order = this.getOrder(orderId);
        OrderStatus orderStatus = OrderStatus.valueOf(status);
        if (orderStatus == OrderStatus.PROCESSING || order.getStatus() != OrderStatus.NEW) {
            return false;
        } else if (orderStatus == OrderStatus.OUT_FOR_DELIVERY || order.getStatus() != OrderStatus.PROCESSING) {
            return false;
        } else if (orderStatus == OrderStatus.DELIVERED || order.getStatus() != OrderStatus.OUT_FOR_DELIVERY) {
            return false;
        } else if (orderStatus == OrderStatus.CANCELLED || order.getStatus() == OrderStatus.DELIVERED) {
            return false;
        } else if (orderStatus == OrderStatus.CANCELLED || order.getStatus() == OrderStatus.FAILED) {
            return false;
        } else {
            order.setStatus(orderStatus);
            order.setNote(note);
            orderRepository.save(order);
            return true;
        }
    }


}

package com.gogo.base.services;

import com.gogo.base.enumerations.OrderStatus;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Address;
import com.gogo.base.models.Order;
import com.gogo.base.models.OrderItem;
import com.gogo.base.models.Product;
import com.gogo.base.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final ProductService productService;

    public void createOrder(UUID cartId, List<OrderItem> orderItems) {
        for (OrderItem orderItem : orderItems) {
            Product product = productService.getProduct(orderItem.getProductId());
            Order order = orderRepository.findByShopIdAndCartIdAndStatus(product.getShopId(), cartId, OrderStatus.NEW);
            if (order == null) {
                Order newOrder = new Order();
                newOrder.setOrderItems(new HashSet<>(orderItems));
                newOrder.setShopId(product.getShopId());
                newOrder.setCartId(cartId);
                newOrder.setStatus(OrderStatus.NEW);
                orderRepository.save(newOrder);
            } else {
                order.getOrderItems().add(orderItem);
                orderRepository.save(order);
            }
        }
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

    public List<Order> getOrdersByShopId(UUID shopId) {
        return orderRepository.findByShopId(shopId);
    }

    public boolean setStatus(UUID orderId, String status, String note) {
        final Order order = this.getOrder(orderId);
        OrderStatus orderStatus = OrderStatus.valueOf(status);
        if (orderStatus == OrderStatus.PROCESSING || order.getStatus() != OrderStatus.NEW) {
            return false;
        } else if (orderStatus == OrderStatus.OUT_FOR_DELIVERY && order.getStatus() != OrderStatus.PROCESSING) {
            return false;
        } else if (orderStatus == OrderStatus.DELIVERED && order.getStatus() != OrderStatus.OUT_FOR_DELIVERY) {
            return false;
        } else if (orderStatus == OrderStatus.CANCELLED && order.getStatus() == OrderStatus.DELIVERED) {
            return false;
        } else if (orderStatus == OrderStatus.CANCELLED && order.getStatus() == OrderStatus.FAILED) {
            return false;
        } else {
            order.setStatus(orderStatus);
            order.setNote(note);
            orderRepository.save(order);
            return true;
        }
    }


}

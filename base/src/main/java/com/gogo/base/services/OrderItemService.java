package com.gogo.base.services;

import com.gogo.base.dto.OrderItemDto;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.OrderItem;
import com.gogo.base.repository.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderItemService {

    private final OrderItemRepository orderItemRepository;
    private final ProductService productService;

    public void createOrderItem(OrderItemDto orderItemDto) {
        OrderItem orderItem = OrderItem.builder()
                .quantity(orderItemDto.getQuantity())
                .productId(orderItemDto.getProductId())
                .cartId(orderItemDto.getCartId())
                .price((productService.getProduct(orderItemDto.getProductId()).getPrice()).multiply(BigDecimal.valueOf(orderItemDto.getQuantity())))
                .build();
        orderItemRepository.save(orderItem);
    }

    public OrderItem getOrderItem(UUID id) {
        return orderItemRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public void delete(UUID id) {
        orderItemRepository.deleteById(id);
    }

    public void updateQuantity(UUID id, int newQuantity) {
        OrderItem orderItem = this.getOrderItem(id);
        orderItem.setQuantity(newQuantity);
        orderItem.setPrice((productService.getProduct(orderItem.getProductId()).getPrice()).multiply(BigDecimal.valueOf(newQuantity)));
        orderItemRepository.save(orderItem);
    }

}

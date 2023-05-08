package com.gogo.base.services;

import com.gogo.base.dto.OrderItemDto;
import com.gogo.base.enumerations.CartStatus;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.OrderItem;
import com.gogo.base.models.Product;
import com.gogo.base.repository.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderItemService {

    private final OrderItemRepository orderItemRepository;
    private final ProductService productService;
    private final CartService cartService;

    public void createOrderItem(OrderItemDto orderItemDto) {
        OrderItem orderItem = OrderItem.builder()
                .quantity(orderItemDto.getQuantity())
                .productId(orderItemDto.getProductId())
                .cartId(cartService.getCartsByStatusAndUserId(CartStatus.NEW, orderItemDto.getUserId()).stream().findFirst().get().getId())
                .price((productService.getProduct(orderItemDto.getProductId()).getPrice()).multiply(BigDecimal.valueOf(orderItemDto.getQuantity())))
                .build();
        orderItemRepository.save(orderItem);
        cartService.updateTotalPrice(orderItem.getCartId(), this.getOrderItemByCart(orderItem.getCartId()));
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
        cartService.updateTotalPrice(orderItem.getCartId(), this.getOrderItemByCart(orderItem.getCartId()));
    }

    public List<OrderItem> getOrderItemByCart(UUID cartId) {
        return orderItemRepository.findByCartId(cartId);
    }

    public List<Product> getProductsByCartId(UUID cartId) {
        List<UUID> productIds = orderItemRepository.findProductIdByCartId(cartId);
        List<Product> products = new ArrayList<>();
        productIds.forEach(productId -> products.add(productService.getProduct(productId)));
        return products;
    }
}

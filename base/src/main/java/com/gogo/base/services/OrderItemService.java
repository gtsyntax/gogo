package com.gogo.base.services;

import com.gogo.base.dto.OrderItemDto;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.OrderItem;
import com.gogo.base.repository.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderItemService {

    private final ProductService productService;
    private final OrderService orderService;
    private final OrderItemRepository orderItemRepository;

    public void createOrderItem(OrderItemDto orderItemDto) {
        OrderItem orderItem = OrderItem.builder()
                .quantity(orderItemDto.getQuantity())
                .productId(orderItemDto.getProductId())
                .order(orderService.getOrder(orderItemDto.getOrderId()))
                .build();
        orderItemRepository.save(orderItem);
        orderService.addOrderItem(orderItem);
    }

    public OrderItem getOrderItem(UUID id){
        return orderItemRepository.findById(id).orElseThrow(NotFoundException::new);
    }


}

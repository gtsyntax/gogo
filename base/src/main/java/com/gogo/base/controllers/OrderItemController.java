package com.gogo.base.controllers;

import com.gogo.base.dto.OrderItemDto;
import com.gogo.base.models.OrderItem;
import com.gogo.base.repository.OrderItemRepository;
import com.gogo.base.services.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/order_item")
@RequiredArgsConstructor
public class OrderItemController {
    private final OrderItemService orderItemService;
    private final OrderItemRepository orderItemRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createOrderItem(@RequestBody OrderItemDto orderItemDto) {
        orderItemService.createOrderItem(orderItemDto);
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "15") int size) {

        try {
            Pageable paging = PageRequest.of(page, size);

            Page<OrderItem> pageTuts;
            pageTuts = orderItemRepository.findAll(paging);

            Map<String, Object> response = new HashMap<>();
            response.put("orderItems", pageTuts.getContent());
            response.put("currentPage", pageTuts.getNumber());
            response.put("totalItems", pageTuts.getTotalElements());
            response.put("totalPages", pageTuts.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public OrderItem getOrderItem(@PathVariable(value = "id") UUID id) {
        return orderItemService.getOrderItem(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteOrderItem(@PathVariable(value = "id") UUID orderItemId) {
        orderItemService.delete(orderItemId);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public void updateQuantity(@RequestBody Map<String, String> json) {
        orderItemService.updateQuantity(UUID.fromString(json.get("order_item_id")), Integer.parseInt(json.get("quantity")));
    }

    @GetMapping("/by_cart/{id}")
    public List<OrderItem> getByCartId(@PathVariable(value = "id") UUID cartId){
        return orderItemService.getOrderItemByCart(cartId);
    }

}

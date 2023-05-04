package com.gogo.base.controllers;

import com.gogo.base.models.Order;
import com.gogo.base.repository.OrderRepository;
import com.gogo.base.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/Order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final OrderRepository orderRepository;

    @GetMapping("/{id}")
    public Order getOrder(UUID id) {
        return orderService.getOrder(id);
    }


    //TODO
    /*
    @GetMapping
    public ResponseEntity<Map<String, Object>> getMyDelivery(@RequestParam(defaultValue = "0") int page,
                                                             @RequestParam(defaultValue = "15") int size,
                                                             @RequestBody UUID courierId ) {

        try {
            Pageable paging = PageRequest.of(page, size);

            Page<Order> pageTuts;
            pageTuts = orderService.findAllByCourier(paging, courierId);

            Map<String, Object> response = new HashMap<>();
            response.put("carts", pageTuts.getContent());
            response.put("currentPage", pageTuts.getNumber());
            response.put("totalItems", pageTuts.getTotalElements());
            response.put("totalPages", pageTuts.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    */

}

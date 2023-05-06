package com.gogo.base.controllers;

import com.gogo.base.models.Order;
import com.gogo.base.repository.OrderRepository;
import com.gogo.base.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final OrderRepository orderRepository;

    @GetMapping("/{id}")
    public Order getOrder(UUID id) {
        return orderService.getOrder(id);
    }


    //TODO must add courier before this
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

    @PutMapping("/status")
    public ResponseEntity setStatus(@RequestBody Map<String, String> json){
        Boolean status_verifier = orderService.setStatus(UUID.fromString(json.get("order_id")), json.get("status"), json.get("note"));
        if(status_verifier){
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity<>("This status update is illegal.", HttpStatus.NOT_ACCEPTABLE);
        }
    }
}

package com.gogo.base.controllers;

import com.gogo.base.enumerations.CartStatus;
import com.gogo.base.models.Cart;
import com.gogo.base.repository.CartRepository;
import com.gogo.base.services.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;
    private final CartRepository cartRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createCart(@RequestBody Map<String, String> json) {
        cartService.createCart(json.get("username"));
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "15") int size) {

        try {
            Pageable paging = PageRequest.of(page, size);

            Page<Cart> pageTuts;
            pageTuts = cartRepository.findAll(paging);

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

    @GetMapping("/{id}")
    public Cart getCart(@PathVariable(value = "id") UUID id) {
        return cartService.getCart(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void cancelCart(@PathVariable(value = "id") UUID id) {
        cartService.setStatus(id, CartStatus.CANCELLED);
        //TODO payment will be returned
    }
}
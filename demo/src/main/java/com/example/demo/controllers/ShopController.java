package com.example.demo.controllers;

import com.example.demo.models.Shop;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/shops")
public class ShopController {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createShop(@RequestBody Shop shop) {

    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Shop>> getAllShops() {
        return null;
    }

    @GetMapping("/{shop-id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Shop> getShopById(@PathVariable("shop-id") UUID shopId) {
        return null;
    }
}

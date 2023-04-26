package com.gogo.base.controllers;

import com.gogo.base.dto.ShopDetail;
import com.gogo.base.dto.ShopResponse;
import com.gogo.base.dto.ShopUpdate;
import com.gogo.base.services.ShopService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/shops")
@RequiredArgsConstructor
public class ShopController {
    private final ShopService shopService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createStore(@RequestBody ShopDetail shopDetail) {
        shopService.createStore(shopDetail);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ShopResponse> getAllStores() {
        return shopService.getAllStores();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ShopResponse getStore(@PathVariable("id") UUID id) {
        return shopService.getStore(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateStore(@PathVariable("id") UUID id, @RequestBody ShopUpdate shopUpdate) {
        shopService.updateStore(id, shopUpdate);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteStore(@PathVariable("id") UUID id) {
        shopService.deleteShop(id);
    }

    @PostMapping("/items/{id}/add")
    public void addProductToCart(@PathVariable("id") UUID id) {
        shopService.addProductToCart(id);
    }
}

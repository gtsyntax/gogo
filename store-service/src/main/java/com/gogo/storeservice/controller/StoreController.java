package com.gogo.storeservice.controller;

import com.gogo.storeservice.dto.StoreDetail;
import com.gogo.storeservice.dto.StoreResponse;
import com.gogo.storeservice.dto.StoreUpdate;
import com.gogo.storeservice.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/stores")
@RequiredArgsConstructor
public class StoreController {
    private final StoreService storeService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createStore(@RequestBody StoreDetail storeDetail) {
        storeService.createStore(storeDetail);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<StoreResponse> getAllStores() {
        return storeService.getAllStores();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public StoreResponse getStore(@PathVariable("id") UUID id) {
        return storeService.getStore(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateStore(@PathVariable("id") UUID id, @RequestBody StoreUpdate storeUpdate) {
        storeService.updateStore(id, storeUpdate);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteStore(@PathVariable("id") UUID id) {
        storeService.deleteStore(id);
    }

    @PostMapping("/items/{id}/add")
    public void addProductToCart(@PathVariable("id") UUID id) {
        storeService.addProductToCart(id);
    }


}

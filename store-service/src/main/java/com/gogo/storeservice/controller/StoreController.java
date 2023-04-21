package com.gogo.storeservice.controller;

import com.gogo.storeservice.dto.StoreDetail;
import com.gogo.storeservice.dto.StoreResponse;
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
    public StoreResponse getStoreById(@PathVariable("id") UUID id) {
        return storeService.getStoreById(id);
    }
}

package com.gogo.storeservice.controller;

import com.gogo.storeservice.dto.StoreDetail;
import com.gogo.storeservice.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
}

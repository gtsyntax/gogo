package com.gogo.storeservice.service.impl;

import com.gogo.storeservice.dto.StoreDetail;
import com.gogo.storeservice.model.Store;
import com.gogo.storeservice.repository.StoreRepository;
import com.gogo.storeservice.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class StoreServiceImpl implements StoreService {
    private final StoreRepository storeRepository;
    @Override
    public void createStore(StoreDetail storeDetail) {
        Store store = Store.builder()
                .name(storeDetail.getName())
                .address(storeDetail.getAddress())
                .city(storeDetail.getCity())
                .country(storeDetail.getCountry())
                .zipCode(storeDetail.getZipCode())
                .build();
        store.setCreatedAt(LocalDateTime.now());
        storeRepository.save(store);
    }
}

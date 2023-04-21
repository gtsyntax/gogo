package com.gogo.storeservice.service.impl;

import com.gogo.storeservice.dto.StoreDetail;
import com.gogo.storeservice.dto.StoreResponse;
import com.gogo.storeservice.model.Store;
import com.gogo.storeservice.repository.StoreRepository;
import com.gogo.storeservice.service.StoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class StoreServiceImpl implements StoreService {
    private final StoreRepository storeRepository;
    private final WebClient webClient;

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

    @Override
    public List<StoreResponse> getAllStores() {
       List<Store> stores = storeRepository.findAll();
       return stores.stream().map(this::mapToStoreResponse).toList();
    }

    @Override
    public StoreResponse getStoreById(UUID id) {
       Optional<Store> store = storeRepository.findById(id);
       return store.stream().map(this::mapToStoreResponse).findFirst()
               .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Store not found"));
    }

    private StoreResponse mapToStoreResponse(Store store) {
        return StoreResponse.builder()
                .id(store.getId())
                .name(store.getName())
                .address(store.getAddress())
                .city(store.getCity())
                .country(store.getCountry())
                .zipCode(store.getZipCode())
                .createdAt(store.getCreatedAt())
                .updatedAt(store.getUpdatedAt())
                .build();
    }
}

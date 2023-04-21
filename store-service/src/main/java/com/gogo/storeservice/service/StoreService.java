package com.gogo.storeservice.service;


import com.gogo.storeservice.dto.StoreDetail;
import com.gogo.storeservice.dto.StoreResponse;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface StoreService {
    void createStore(StoreDetail storeDetail);

    List<StoreResponse> getAllStores();

    StoreResponse getStoreById(UUID id);

}

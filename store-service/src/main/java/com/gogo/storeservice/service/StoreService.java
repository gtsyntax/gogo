package com.gogo.storeservice.service;


import com.gogo.storeservice.dto.StoreDetail;
import com.gogo.storeservice.dto.StoreResponse;
import com.gogo.storeservice.dto.StoreUpdate;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface StoreService {
    void createStore(StoreDetail storeDetail);

    List<StoreResponse> getAllStores();

    StoreResponse getStore(UUID id);

    void updateStore(UUID id, StoreUpdate storeUpdate);

    void deleteStore(UUID id);

}

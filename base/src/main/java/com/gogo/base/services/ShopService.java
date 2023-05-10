package com.gogo.base.services;

import com.gogo.base.dto.ShopResponse;
import com.gogo.base.dto.ShopUpdate;
import com.gogo.base.dto.ShopDetail;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Shop;
import com.gogo.base.repository.ShopRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class ShopService {
    private final ShopRepository shopRepository;

    public void createStore(ShopDetail shopDetail) {
        Shop store = Shop.builder()
                .name(shopDetail.getName())
                .address(shopDetail.getAddress())
                .city(shopDetail.getCity())
                .country(shopDetail.getCountry())
                .zipCode(shopDetail.getZipCode())
                .build();
        store.setCreatedAt(LocalDateTime.now());
        shopRepository.save(store);
    }


    public List<ShopResponse> getAllStores() {
        List<Shop> stores = shopRepository.findAll();
        return stores.stream().map(this::mapToShopResponse).toList();
    }

    public ShopResponse getStore(UUID id) {
        Optional<Shop> store = shopRepository.findById(id);
        return store.stream().map(this::mapToShopResponse).findFirst()
                .orElseThrow(NotFoundException::new);
    }

    public void updateStore(UUID id, ShopUpdate storeUpdate) {
        Optional<Shop> optionalStore = shopRepository.findById(id);
        if (optionalStore.isPresent()) {
            Shop store = optionalStore.get();
            if (storeUpdate.getName() != null)
                store.setName(storeUpdate.getName());
            if (storeUpdate.getAddress() != null)
                store.setAddress(storeUpdate.getAddress());
            if (storeUpdate.getCity() != null)
                store.setCity(storeUpdate.getCity());
            if (storeUpdate.getCountry() != null)
                store.setCountry(storeUpdate.getCountry());
            if (storeUpdate.getCountry() != null)
                store.setCountry(storeUpdate.getCountry());
            if (storeUpdate.getZipCode() != null)
                store.setZipCode(storeUpdate.getZipCode());
            store.setUpdatedAt(LocalDateTime.now());
            shopRepository.save(store);
        }
    }

    public void deleteShop(UUID id) {
        shopRepository.deleteById(id);
    }

    private ShopResponse mapToShopResponse(Shop shop) {
        return ShopResponse.builder()
                .id(shop.getId())
                .name(shop.getName())
                .address(shop.getAddress())
                .city(shop.getCity())
                .country(shop.getCountry())
                .zipCode(shop.getZipCode())
                .createdAt(shop.getCreatedAt())
                .updatedAt(shop.getUpdatedAt())
                .build();
    }
}

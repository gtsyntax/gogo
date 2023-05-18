package com.example.demo.services;

import com.example.demo.models.Shop;

import java.util.List;
import java.util.UUID;

public interface ShopService {
    void createShop();
    List<Shop> getFeaturedShops();
    List<Shop> getAllShop();
    Shop getShopById(UUID shopId);
    Shop updateShop();

    void deleteShop(UUID shopId);
}

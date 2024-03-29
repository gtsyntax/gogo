package com.gogo.base.services;

import com.gogo.base.dto.ShopDetail;
import com.gogo.base.dto.ShopResponse;
import com.gogo.base.dto.ShopUpdate;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Order;
import com.gogo.base.models.OrderItem;
import com.gogo.base.models.Shop;
import com.gogo.base.repository.ShopRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class ShopService {
    private final ShopRepository shopRepository;
    private final OrderService orderService;

    public void createStore(ShopDetail shopDetail) {
        Shop store = Shop.builder()
                .name(shopDetail.getName())
                .address(shopDetail.getAddress())
                .city(shopDetail.getCity())
                .country(shopDetail.getCountry())
                .zipCode(shopDetail.getZipCode())
                .minDeliveryFee(shopDetail.getMinDeliveryFee())
                .shopOwner(shopDetail.getShopOwner())
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
                .minDeliveryFee(shop.getMinDeliveryFee())
                .build();
    }

    public BigDecimal getTotalPayments(UUID shopId, LocalDate startDate, LocalDate endDate) {
        List<Order> orders = orderService.getOrdersByShopId(shopId);
        BigDecimal totalPrice = BigDecimal.ZERO;
        for (Order order : orders) {
            for (OrderItem orderItem : order.getOrderItems()) {
                ZoneId zone = ZoneId.systemDefault();
                LocalDate createdDate = orderItem.getCreatedDate().atZone(zone).toLocalDate();
                if (createdDate.isAfter(startDate) && createdDate.isBefore(endDate)) {
                    totalPrice = totalPrice.add(orderItem.getPrice());
                }
            }
        }
        return totalPrice;
    }

    public ShopResponse getShopByShopOwner(UUID shopOwnerId) {
        Optional<Shop> optionalShop = shopRepository.findByShopOwner(shopOwnerId);
        return optionalShop.stream().map(this::mapToShopResponse).findFirst().orElseThrow(NotFoundException::new);
    }
}

package com.gogo.restaurantservice.service;

import com.gogo.restaurantservice.dto.RestaurantDetail;
import com.gogo.restaurantservice.dto.RestaurantResponse;
import com.gogo.restaurantservice.model.Restaurant;
import com.gogo.restaurantservice.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;
    public void createRestaurant(RestaurantDetail restaurantDetail) {
        Restaurant restaurant = Restaurant.builder()
                .name(restaurantDetail.getName())
                .minDeliveryFee(restaurantDetail.getMinDeliveryFee())
                .address(restaurantDetail.getAddress())
                .build();

        restaurantRepository.save(restaurant);

    }

    public List<RestaurantResponse> getAllRestaurants() {
        List<Restaurant> restaurants = restaurantRepository.findAll();

        return restaurants.stream().map(this::mapToRestaurantResponse).toList();
    }

    private RestaurantResponse mapToRestaurantResponse(Restaurant restaurant) {
        return RestaurantResponse.builder()
                .id(restaurant.getId())
                .name(restaurant.getName())
                .minDeliveryFee(restaurant.getMinDeliveryFee())
                .address(restaurant.getAddress())
                .build();
    }
}

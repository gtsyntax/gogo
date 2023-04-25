package com.gogo.restaurantservice.controller;

import com.gogo.restaurantservice.dto.RestaurantDetail;
import com.gogo.restaurantservice.dto.RestaurantResponse;
import com.gogo.restaurantservice.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/restaurants")
@RequiredArgsConstructor
public class RestaurantController {
    private final RestaurantService restaurantService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createRestaurant(@RequestBody RestaurantDetail restaurantDetail) {
        restaurantService.createRestaurant(restaurantDetail);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<RestaurantResponse> getAllRestaurant() {
        return restaurantService.getAllRestaurants();
    }
}

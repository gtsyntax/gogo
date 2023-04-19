package com.gogo.restaurantservice.repository;

import com.gogo.restaurantservice.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RestaurantRepository extends JpaRepository<Restaurant, UUID> {
}

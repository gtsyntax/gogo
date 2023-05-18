package com.example.demo.repository;

import com.example.demo.models.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ShopRepository extends JpaRepository<Shop, UUID> {
}

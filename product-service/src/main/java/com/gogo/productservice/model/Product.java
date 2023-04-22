package com.gogo.productservice.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="products")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(name="name")
    private String name;
    @Column(name="description")
    private String description;
    @Column(name="price")
    private BigDecimal price;
    @Column(name="storeId")
    private UUID storeId;
    @Column(name="createdAt")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt;
    @Column(name="updatedAt")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime updatedAt;
}
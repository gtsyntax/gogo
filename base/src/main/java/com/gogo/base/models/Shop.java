package com.gogo.base.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.gogo.base.enumerations.ShopType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="store")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(name = "name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "city")
    private String city;
    @Column(name = "country")
    private String country;
    @Column(name = "zipCode")
    private String zipCode;
    @Column(name = "shopType")
    private ShopType shopType;
    @Column(name = "createdAt")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt;
    @Column(name = "updatedAt")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime updatedAt;
}

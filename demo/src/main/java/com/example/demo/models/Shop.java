package com.example.demo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity(name = "shops")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    @OneToOne(fetch = FetchType.LAZY) // Unidirectional relationship
    @JoinColumn(name = "address_id") // create a column in shop table storing address id
    private Address address;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true) // Unidirectional relationship
    @JoinColumn(name = "shop_id") // create a column in product table storing shop id
    private Set<Product> products = new HashSet<>();
}

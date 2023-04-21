package com.gogo.storeservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StoreResponse {
    private UUID id;
    private String name;
    private String address;
    private String city;
    private String country;
    private String zipCode;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

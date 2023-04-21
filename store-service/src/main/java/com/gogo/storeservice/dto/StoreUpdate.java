package com.gogo.storeservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StoreUpdate {
    private String name;
    private String address;
    private String city;
    private String country;
    private String zipCode;
}

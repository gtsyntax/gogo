package com.gogo.base.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShopDetail {
    private String name;
    private String address;
    private String city;
    private String country;
    private String zipCode;
    private BigDecimal minDeliveryFee;
    private UUID shopOwner;
}

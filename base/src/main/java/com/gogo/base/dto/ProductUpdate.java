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
public class ProductUpdate {
    private UUID id;
    private String name;
    private String description;
    private BigDecimal price;
    private UUID shopId;
}

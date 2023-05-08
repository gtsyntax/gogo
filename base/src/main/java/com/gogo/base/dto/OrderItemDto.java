package com.gogo.base.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDto {
    private int quantity;
    @JsonProperty("product_id")
    private UUID productId;
    @JsonProperty("user_id")
    private UUID userId;
}

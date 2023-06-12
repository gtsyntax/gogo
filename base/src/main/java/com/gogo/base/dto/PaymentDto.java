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
public class PaymentDto {
    @JsonProperty("payment_provider")
    private String paymentProvider;
    @JsonProperty("payment_provider_id")
    private String paymentProviderId;
    @JsonProperty("cart_id")
    private UUID cartId;
}

package com.gogo.paymentservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDetail {
    private UUID userId;
    private UUID restaurantId;
    private UUID orderId;
    private BigDecimal amount;
    private String method;
    private Date created;
}

package com.gogo.paymentservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name="payments")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(name = "userId")
    @OneToOne
    private UUID userId;
    @Column(name = "restaurantId")
    @OneToOne
    private UUID restaurantId;
    @Column(name = "orderId")
    @OneToOne
    private UUID orderId;
    @Column(name = "amount")
    private BigDecimal amount;
    @Column(name = "method")
    private String method;
    @Column(name = "created")
    private Date created;
}

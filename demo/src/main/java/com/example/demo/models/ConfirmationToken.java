package com.example.demo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConfirmationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String confirmationToken;
    private LocalDate createdDate;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "customer_id")
    private Customer customer;

    public ConfirmationToken(Customer customer) {
        this.customer = customer;
        this.createdDate = LocalDate.now();
        this.confirmationToken = UUID.randomUUID().toString();
    }
}

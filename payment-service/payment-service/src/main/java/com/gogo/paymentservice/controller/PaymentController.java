package com.gogo.paymentservice.controller;

import com.gogo.paymentservice.dto.PaymentDetail;
import com.gogo.paymentservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void makePayment(@RequestBody PaymentDetail paymentDetail) {
        paymentService.makePayment(paymentDetail);
    }
}

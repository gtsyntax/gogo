package com.gogo.base.controllers;

import com.gogo.base.dto.PaymentDto;
import com.gogo.base.services.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity create(@RequestBody PaymentDto paymentDto) {
        boolean payment_verifier = paymentService.create(paymentDto);
        if (payment_verifier) {
            return new ResponseEntity("Payment is successful.", HttpStatus.OK);
        } else {
            return new ResponseEntity("This cart is already paid.", HttpStatus.NOT_ACCEPTABLE);
        }
    }

}

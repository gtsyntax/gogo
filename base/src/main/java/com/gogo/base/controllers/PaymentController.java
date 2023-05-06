package com.gogo.base.controllers;

import com.gogo.base.dto.PaymentDto;
import com.gogo.base.services.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody PaymentDto paymentDto){
        paymentService.create(paymentDto);
    }

}

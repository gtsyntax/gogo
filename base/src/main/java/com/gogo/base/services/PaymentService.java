package com.gogo.base.services;

import com.gogo.base.dto.PaymentDto;
import com.gogo.base.enumerations.CartStatus;
import com.gogo.base.enumerations.PaymentStatus;
import com.gogo.base.models.Payment;
import com.gogo.base.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class PaymentService {
    public final PaymentRepository paymentRepository;
    public final CartService cartService;

    public void create(PaymentDto paymentDto){
        log.info("------hello");
        Payment payment = Payment.builder()
                .cartId(paymentDto.getCartId())
                .paymentProvider(paymentDto.getPaymentProvider())
                .paymentProviderId(paymentDto.getPaymentProviderId())
                .price(cartService.getCart(paymentDto.getCartId()).getTotalPrice())
                // Payment will be directly accepted.
                // This can be changed later to implement a better payment system.
                .status(PaymentStatus.ACCEPTED)
                .build();
        log.info("-------payment clone created");
        paymentRepository.save(payment);
        log.info("--------payment is saved");
        cartService.setStatus(paymentDto.getCartId(), CartStatus.CONFIRMED);
        log.info("---------cart updated");
    }

    public Payment getPaymentByCartId(UUID cartId){
        return paymentRepository.findByCartId(cartId);
    }

    public PaymentStatus getStatus(UUID cartId){
        Payment payment = this.getPaymentByCartId(cartId);
        return payment.getStatus();
    }


}

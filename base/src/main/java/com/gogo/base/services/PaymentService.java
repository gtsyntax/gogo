package com.gogo.base.services;

import com.gogo.base.dto.PaymentDto;
import com.gogo.base.enumerations.CartStatus;
import com.gogo.base.enumerations.PaymentStatus;
import com.gogo.base.models.Payment;
import com.gogo.base.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
@RequiredArgsConstructor
public class PaymentService {
    public final PaymentRepository paymentRepository;
    public final CartService cartService;

    public boolean create(PaymentDto paymentDto) {
        if (cartService.getCart(paymentDto.getCartId()).getStatus() == CartStatus.CONFIRMED) {
            return false;
        }
        Payment payment = Payment.builder()
                .cartId(paymentDto.getCartId())
                .paymentProvider(paymentDto.getPaymentProvider())
                .paymentProviderId(paymentDto.getPaymentProviderId())
                .price(cartService.getCart(paymentDto.getCartId()).getTotalPrice())
                // Payment will be directly accepted.
                // This can be changed later to implement a better payment system.
                .status(PaymentStatus.ACCEPTED)
                .build();
        paymentRepository.save(payment);
        cartService.setStatus(paymentDto.getCartId(), CartStatus.CONFIRMED);
        cartService.setPayment(paymentDto.getCartId(), payment.getId());
        return true;
    }

    public Payment getPaymentByCartId(UUID cartId) {
        return paymentRepository.findByCartId(cartId);
    }

    public PaymentStatus getStatus(UUID cartId) {
        Payment payment = this.getPaymentByCartId(cartId);
        return payment.getStatus();
    }


}

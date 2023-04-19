package com.gogo.paymentservice.service;

import com.gogo.paymentservice.dto.PaymentDetail;
import com.gogo.paymentservice.model.Payment;
import com.gogo.paymentservice.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentService {
    private final PaymentRepository paymentRepository;

    public void makePayment(PaymentDetail paymentDetail) {
        /*
            Payment payment = Payment.builder()
                    .userId(paymentDetail.getUserId())
                    .restaurantId(paymentDetail.getRestaurantId())
                    .orderId(paymentDetail.getOrderId())
                    .amount(paymentDetail.getAmount())
                    .method(paymentDetail.getMethod())
                    .created(paymentDetail.getCreated())
                    .build();
            paymentRepository.save(payment);
         */
    }
}

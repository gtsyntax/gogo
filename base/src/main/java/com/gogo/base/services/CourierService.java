package com.gogo.base.services;

import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Courier;
import com.gogo.base.repository.CourierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CourierService {
    private final CourierRepository courierRepository;

    public void updateCourier(Courier objCourier) {
        Courier courier = courierRepository.findById(objCourier.getId()).orElseThrow(NotFoundException::new);

        if (objCourier.getFirstName() != null) {
            courier.setFirstName(objCourier.getFirstName());
        }
        if (objCourier.getLastName() != null) {
            courier.setLastName(objCourier.getLastName());
        }
        if (objCourier.getPhone() != null) {
            courier.setPhone(objCourier.getPhone());
        }
        if (objCourier.getShopId() != null) {
            courier.setShopId(objCourier.getShopId());
        }
        courierRepository.save(courier);
    }

    public Courier getCourier(UUID id) {
        return courierRepository.findById(id).orElseThrow(NotFoundException::new);
    }

}

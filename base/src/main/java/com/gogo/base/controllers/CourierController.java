package com.gogo.base.controllers;

import com.gogo.base.models.Courier;
import com.gogo.base.repository.CourierRepository;
import com.gogo.base.services.CourierService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/courier")
@RequiredArgsConstructor
public class CourierController {
    private final CourierService courierService;
    private final CourierRepository courierRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void updateCourier(@RequestBody Courier objCourier) {
        courierService.updateCourier(objCourier);
    }

    @GetMapping("/by_shop/{shopId}")
    public ResponseEntity<Map<String, Object>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "15") int size,
                                                              @PathVariable("shopId") UUID shopId) {

        try {
            Pageable paging = PageRequest.of(page, size);

            Page<Courier> pageTuts;
            pageTuts = courierRepository.findByShopId(paging, shopId);

            Map<String, Object> response = new HashMap<>();
            response.put("couriers", pageTuts.getContent());
            response.put("currentPage", pageTuts.getNumber());
            response.put("totalItems", pageTuts.getTotalElements());
            response.put("totalPages", pageTuts.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Courier getCourier(@PathVariable("id") UUID id) {
        return courierService.getCourier(id);
    }

}

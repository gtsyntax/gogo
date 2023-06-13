package com.gogo.base.controllers;

import com.gogo.base.dto.ShopDetail;
import com.gogo.base.dto.ShopResponse;
import com.gogo.base.dto.ShopUpdate;
import com.gogo.base.models.Shop;
import com.gogo.base.repository.ShopRepository;
import com.gogo.base.services.ShopService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/shops")
@RequiredArgsConstructor
public class ShopController {
    private final ShopService shopService;
    private final ShopRepository shopRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createStore(@RequestBody ShopDetail shopDetail) {
        shopService.createStore(shopDetail);
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "15") int size) {

        try {
            Pageable paging = PageRequest.of(page, size);

            Page<Shop> pageTuts;
            pageTuts = shopRepository.findAll(paging);

            Map<String, Object> response = new HashMap<>();
            response.put("shops", pageTuts.getContent());
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
    public ShopResponse getStore(@PathVariable("id") UUID id) {
        return shopService.getStore(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateStore(@PathVariable("id") UUID id, @RequestBody ShopUpdate shopUpdate) {
        shopService.updateStore(id, shopUpdate);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteStore(@PathVariable("id") UUID id) {
        shopService.deleteShop(id);
    }

    @GetMapping("/{shop_id}/payments")
    public BigDecimal getTotalPaymentsByStore(@PathVariable("shop_id") UUID shop_id,
                                              @RequestParam(defaultValue = "0") LocalDate start_date,
                                              @RequestParam(defaultValue = "0") LocalDate end_date) {
        return shopService.getTotalPayments(shop_id, start_date, end_date);
    }

}

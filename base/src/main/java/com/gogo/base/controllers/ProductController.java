package com.gogo.base.controllers;

import com.gogo.base.dto.ProductRequest;
import com.gogo.base.dto.ProductResponse;
import com.gogo.base.dto.ProductUpdate;
import com.gogo.base.models.Product;
import com.gogo.base.repository.ProductRepository;
import com.gogo.base.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final ProductRepository productRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduct(@RequestBody ProductRequest productRequest) {
        productService.createProduct(productRequest);
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "15") int size) {

        try {
            Pageable paging = PageRequest.of(page, size);

            Page<Product> pageTuts;
            pageTuts = productRepository.findAll(paging);

            Map<String, Object> response = new HashMap<>();
            response.put("products", pageTuts.getContent());
            response.put("currentPage", pageTuts.getNumber());
            response.put("totalItems", pageTuts.getTotalElements());
            response.put("totalPages", pageTuts.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable(value = "id") UUID id){
        return productService.getProduct(id);
    }

    @PutMapping
    public void updateProduct(@RequestBody ProductUpdate productUpdate){
        productService.update(productUpdate);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable(value = "id") UUID id){
        productService.delete(id);
    }

    @GetMapping("/store/{storeId}")
    public ResponseEntity<Map<String, Object>> getProductByStore(@RequestParam(defaultValue = "0") int page,
                                                                 @RequestParam(defaultValue = "15") int size,
                                                                 @PathVariable(value = "storeId") UUID storeId){
        try {
            List<Product> products = new ArrayList<Product>();
            Pageable paging = PageRequest.of(page, size);

            Page<Product> pagePros;
            pagePros = productRepository.findAll(paging);

            List<ProductResponse> productRequest = productService.getProductsByStore(storeId);
            Map<String, Object> response = new HashMap<>();
            response.put("products", pagePros.getContent());
            response.put("currentPage", pagePros.getNumber());
            response.put("totalItems", pagePros.getTotalElements());
            response.put("totalPages", pagePros.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

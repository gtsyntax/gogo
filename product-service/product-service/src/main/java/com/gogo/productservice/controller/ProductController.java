package com.gogo.productservice.controller;

import com.gogo.productservice.dto.ProductRequest;
import com.gogo.productservice.dto.ProductResponse;
import com.gogo.productservice.dto.ProductUpdate;
import com.gogo.productservice.model.Product;
import com.gogo.productservice.repository.ProductRepository;
import com.gogo.productservice.service.impl.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/products")
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
            List<Product> products = new ArrayList<Product>();
            Pageable paging = PageRequest.of(page, size);

            Page<Product> pageTuts;
            pageTuts = productRepository.findAll(paging);

            List<ProductResponse> productRequest = productService.getAllProducts();
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
    public List<ProductResponse> getProduct(@PathVariable(value = "id") UUID id){
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

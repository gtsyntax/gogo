package com.gogo.productservice.service.impl;

import com.gogo.productservice.dto.ProductRequest;
import com.gogo.productservice.dto.ProductResponse;
import com.gogo.productservice.dto.ProductUpdate;
import com.gogo.productservice.exception.ProductNotFoundException;
import com.gogo.productservice.model.Product;
import com.gogo.productservice.repository.ProductRepository;
import com.gogo.productservice.service.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService implements ProductServiceImpl {

    private final ProductRepository productRepository;

    public void createProduct(ProductRequest productRequest) {
        Product product = Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .storeId(productRequest.getStoreId())
                .build();
        product.setCreatedAt(LocalDateTime.now());
        productRepository.save(product);
    }

    public List<ProductResponse> getAllProducts() {
        List<Product> products = productRepository.findAll();

        return products.stream().map(this::mapToProductResponse).toList();
    }

    @Override
    public List<ProductResponse> getProduct(UUID id) {
        final Optional<Product> product = productRepository.findById(id);

        return product.stream().map(this::mapToProductResponse).toList();
    }

    @Override
    public void update(ProductUpdate productUpdate) {
        final Product product = productRepository.findById(productUpdate.getId()).orElseThrow(ProductNotFoundException::new);
        if(!(productUpdate.getName() == null)){
            product.setName(productUpdate.getName());
        }
        if(!(productUpdate.getDescription() == null)){
            product.setDescription(productUpdate.getDescription());
        }
        if(productUpdate.getPrice().compareTo(BigDecimal.ZERO) != 0){
            product.setPrice(productUpdate.getPrice());
        }
        if(!(productUpdate.getStoreId() == null)){
            product.setStoreId(productUpdate.getStoreId());
        }
        product.setUpdatedAt(LocalDateTime.now());
        productRepository.save(product);
    }

    @Override
    public void delete(UUID id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<ProductResponse> getProductsByStore(UUID storeId) {
        List<Product> products = productRepository.findByStoreId(storeId);

        return products.stream().map(this::mapToProductResponse).toList();
    }


    private ProductResponse mapToProductResponse(Product product) {

        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .storeId(product.getStoreId())
                .build();
    }

    private void nowCreated(Product product) {
        product.setCreatedAt(LocalDateTime.now());
    }

    private void nowUpdated(Product product) {
        product.setUpdatedAt(LocalDateTime.now());
    }
}

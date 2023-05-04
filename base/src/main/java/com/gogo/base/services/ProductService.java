package com.gogo.base.services;

import com.gogo.base.dto.ProductRequest;
import com.gogo.base.dto.ProductResponse;
import com.gogo.base.dto.ProductUpdate;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Product;
import com.gogo.base.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {
    private final ProductRepository productRepository;

    public void createProduct(ProductRequest productRequest) {
        Product product = Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .shopId(productRequest.getShopId())
                .build();
        product.setCreatedAt(LocalDateTime.now());
        productRepository.save(product);
    }


    public List<ProductResponse> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(this::mapToProductResponse).toList();
    }


    public Product getProduct(UUID id) {
        return productRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public void update(ProductUpdate productUpdate) {
        final Product product = productRepository.findById(productUpdate.getId()).orElseThrow(NotFoundException::new);
        if (!(productUpdate.getName() == null)) {
            product.setName(productUpdate.getName());
        }
        if (!(productUpdate.getDescription() == null)) {
            product.setDescription(productUpdate.getDescription());
        }
        if (productUpdate.getPrice().compareTo(BigDecimal.ZERO) != 0) {
            product.setPrice(productUpdate.getPrice());
        }
        if (!(productUpdate.getShopId() == null)) {
            product.setShopId(productUpdate.getShopId());
        }
        product.setUpdatedAt(LocalDateTime.now());
        productRepository.save(product);
    }

    public void delete(UUID id) {
        productRepository.deleteById(id);
    }

    public List<ProductResponse> getProductsByStore(UUID shopId) {
        List<Product> products = productRepository.findByShopId(shopId);
        return products.stream().map(this::mapToProductResponse).toList();
    }

    private ProductResponse mapToProductResponse(Product product) {

        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .shopId(product.getShopId())
                .build();
    }

    private void nowCreated(Product product) {
        product.setCreatedAt(LocalDateTime.now());
    }

    private void nowUpdated(Product product) {
        product.setUpdatedAt(LocalDateTime.now());
    }
}

package com.gogo.productservice.service;

import com.gogo.productservice.dto.ProductRequest;
import com.gogo.productservice.dto.ProductResponse;
import com.gogo.productservice.dto.ProductUpdate;

import java.util.List;
import java.util.UUID;


public interface ProductServiceImpl {
    void createProduct(ProductRequest productRequest);

    List<ProductResponse> getAllProducts();

    List<ProductResponse> getProduct(UUID id);

    void update(ProductUpdate productUpdate);

    void delete(UUID id);

    List<ProductResponse> getProductsByStore(UUID storeId);


}

package com.gogo.base.exceptions;

public class ProductNotFoundException extends BaseException {
    public ProductNotFoundException(){
        super("Product Not Found.");
    }
}

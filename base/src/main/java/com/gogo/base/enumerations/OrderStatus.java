package com.gogo.base.enumerations;

public enum OrderStatus {
    NEW, PROCESSING, OUT_FOR_DELIVERY, DELIVERED, CANCELLED, FAILED
}
/*
NEW: This status indicates that the order has been received and is waiting to be processed.

PROCESSING: This status indicates that the order is being prepared by the restaurant or the kitchen staff.

OUT_FOR_DELIVERY: This status indicates that the order has been prepared and is out for delivery to the customer.

DELIVERED: This status indicates that the order has been successfully delivered to the customer.

CANCELLED: This status indicates that the order has been cancelled by either the customer or the restaurant.

FAILED: This status indicates that the delivery of the order has failed, for example,
if the customer is not available at the delivery location.
 */
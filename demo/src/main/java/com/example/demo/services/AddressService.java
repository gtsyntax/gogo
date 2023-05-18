package com.example.demo.services;

import com.example.demo.models.Address;

import java.util.List;
import java.util.UUID;

public interface AddressService {
    void createAddress();
    List<Address> getAllAddress();
    Address getAddressById(UUID addressId);

    Address updateAddress();

    void deleteAddress(UUID addressId);
}

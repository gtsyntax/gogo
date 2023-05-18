package com.example.demo.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewCustomerRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
}

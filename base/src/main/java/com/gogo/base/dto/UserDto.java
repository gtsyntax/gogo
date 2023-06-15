package com.gogo.base.dto;

import com.gogo.base.models.Cart;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private UUID id;

    private String username;

    private String token;

    private List<Cart> openCarts;
}

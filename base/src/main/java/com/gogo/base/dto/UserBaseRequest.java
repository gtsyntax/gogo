package com.gogo.base.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserBaseRequest {
    private String username;

    private String email;

    private String password;
}

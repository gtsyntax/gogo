package com.gogo.accountservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * Contains necessary information for user to login
 *
 */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CredentialsDto {

    private String username;

    private String password;
}

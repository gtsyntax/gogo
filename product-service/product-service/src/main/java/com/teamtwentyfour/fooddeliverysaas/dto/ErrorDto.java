package com.teamtwentyfour.fooddeliverysaas.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ErrorDto {

    private String message;

    private Long code;

    private String requestUrl;
}

package com.gogo.base.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class BaseException extends RuntimeException {
    public BaseException(String message) {
        super(message);
    }

    public BaseException(String message, Throwable cause) {
        super(message, cause);
    }
}

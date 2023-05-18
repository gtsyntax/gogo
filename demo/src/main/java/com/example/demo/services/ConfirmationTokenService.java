package com.example.demo.services;

import com.example.demo.models.ConfirmationToken;
import com.example.demo.repository.ConfirmationTokenRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {
    private final ConfirmationTokenRepository confirmationTokenRepository;

    void saveConfirmationToken(ConfirmationToken confirmationToken) {
        confirmationTokenRepository.save(confirmationToken);
    }

    void deleteConfirmationToken(UUID id) {
        confirmationTokenRepository.deleteById(id);
    }
}

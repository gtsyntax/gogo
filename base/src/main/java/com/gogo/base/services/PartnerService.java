package com.gogo.base.services;

import com.gogo.base.dto.NewUserDto;
import com.gogo.base.repository.PartnerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PartnerService {
    private final PartnerRepository partnerRepository;

    public void createPartner(NewUserDto newUserDto)
    {

    }
}

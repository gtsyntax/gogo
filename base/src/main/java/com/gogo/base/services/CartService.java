package com.gogo.base.services;

import com.gogo.base.enumerations.CartStatus;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Cart;
import com.gogo.base.models.User;
import com.gogo.base.repository.CartRepository;
import com.gogo.base.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    public void createCart(String username) {
        User user = userService.getByUsername(username);
        Cart cart = new Cart(user.getId());
        cartRepository.save(cart);
    }

    public Cart getCart(UUID id) {
        return cartRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public List<Cart> getCartsByUserId(UUID userId) {
        return cartRepository.findByUserId(userId);
    }

    public List<Cart> getCartsByStatusAndUserId(CartStatus status, UUID userId) {
        return cartRepository.findByStatusAndUserId(status, userId);
    }

    public void setStatus(UUID cartId, CartStatus status) {
        final Cart cart = this.getCart(cartId);
        cart.setStatus(status);
        cartRepository.save(cart);
    }


}

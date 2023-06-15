package com.gogo.base.services;

import com.gogo.base.enumerations.CartStatus;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Cart;
import com.gogo.base.models.OrderItem;
import com.gogo.base.models.User;
import com.gogo.base.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;
    private final UserService userService;
    private final CustomerService customerService;

    public void createCart(String username) {
        User user = userService.getByUsername(username);
        Cart cart = new Cart(user.getId());
        cart.setCreatedDate(Instant.now());
        cartRepository.save(cart);
        //TODO error 500
        customerService.assignCart(user.getId(), cart.getId());
    }

    public Cart getCart(UUID id) {
        return cartRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public List<Cart> getCartsByUserId(UUID userId) {
        return cartRepository.findByUserId(userId);
    }

    public List<Cart> getCartsByStatusAndUserId(CartStatus status, UUID userId) {
        List<Cart> carts = cartRepository.findByStatusAndUserId(status, userId);
        if (carts.isEmpty() && status == CartStatus.NEW) {
            this.createCart(userService.getById(userId).getUsername());
            carts = cartRepository.findByStatusAndUserId(status, userId);
        }
        return carts;
    }

    public boolean setStatus(UUID cartId, CartStatus status) {
        final Cart cart = this.getCart(cartId);
        if (cart.getStatus() == CartStatus.CANCELLED) {
            return true;
        }
        if (cart.getStatus() == CartStatus.CONFIRMED && status == CartStatus.CANCELLED) {
            return false;
        }
        cart.setStatus(status);
        cart.setLastModifiedDate(Instant.now());
        cartRepository.save(cart);
        return true;
    }

    public void updateTotalPrice(UUID cart_id, List<OrderItem> orderItems) {
        Cart cart = this.getCart(cart_id);
        BigDecimal totalPrice = BigDecimal.ZERO;
        for (OrderItem orderItem : orderItems) {
            totalPrice = totalPrice.add(orderItem.getPrice());
        }
        cart.setTotalPrice(totalPrice);
        cart.setLastModifiedDate(Instant.now());
        cartRepository.save(cart);
    }


    public void setPayment(UUID cartId, UUID paymentId) {
        Cart cart = this.getCart(cartId);
        cart.setPayment(paymentId);
        cartRepository.save(cart);
    }
}

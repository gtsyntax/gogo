package com.gogo.base.repository;

import com.gogo.base.models.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ReviewRepository extends JpaRepository<Review, UUID> {
    List<Review> findByProductId(UUID productId);
    List<Review> findByShopId(UUID shopId);
    List<Review> findByCustomerId(UUID customerId);

    Page<Review> findAll(Pageable pageable);

}

package com.gogo.base.services;

import com.gogo.base.dto.ReviewRequest;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Review;
import com.gogo.base.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;


    public void createReview(ReviewRequest reviewRequest) {
        Review review = Review.builder()
                .customerId(reviewRequest.getCustomerId())
                .shopId(reviewRequest.getShopId())
                .productId(reviewRequest.getProductId())
                .content(reviewRequest.getContent())
                .rating(reviewRequest.getRating())
                .build();
        review.setCreatedDate(Instant.now());
        reviewRepository.save(review);
    }

    public Optional<Review> getReview(UUID reviewId) {
        return reviewRepository.findById(reviewId);
    }

    public List<Review> getReviewsByProductId(UUID productId) {
        return reviewRepository.findByProductId(productId);
    }

    public List<Review> getReviewsByShopId(UUID productId) {
        return reviewRepository.findByShopId(productId);
    }

    public List<Review> getReviewsByCustomerId(UUID productId) {
        return reviewRepository.findByCustomerId(productId);
    }

    public void updateReview(UUID reviewId, String content, int rating) {
        Review review = this.getReview(reviewId).orElseThrow(NotFoundException::new);
        review.setContent(content);
        review.setRating(rating);
        review.setLastModifiedDate(Instant.now());
        reviewRepository.save(review);
    }

    public void deleteReview(UUID reviewId) {
        reviewRepository.deleteById(reviewId);
    }

}

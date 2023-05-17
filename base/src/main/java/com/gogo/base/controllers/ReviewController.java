package com.gogo.base.controllers;

import com.gogo.base.dto.ReviewRequest;
import com.gogo.base.exceptions.NotFoundException;
import com.gogo.base.models.Review;
import com.gogo.base.repository.ReviewRepository;
import com.gogo.base.services.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/review")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewRepository reviewRepository;

    @PostMapping
    public ResponseEntity createReview(@RequestBody ReviewRequest reviewRequest) {
        if (reviewRequest.getRating() >= 0 && reviewRequest.getRating() <= 5){
            reviewService.createReview(reviewRequest);
            return new ResponseEntity( HttpStatus.OK);
        } else {
            return new ResponseEntity("Rating must be in range of 0 to 5.", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                              @RequestParam(defaultValue = "15") int size) {

        try {
            Pageable paging = PageRequest.of(page, size);

            Page<Review> pageTuts;
            pageTuts = reviewRepository.findAll(paging);

            Map<String, Object> response = new HashMap<>();
            response.put("reviews", pageTuts.getContent());
            response.put("currentPage", pageTuts.getNumber());
            response.put("totalItems", pageTuts.getTotalElements());
            response.put("totalPages", pageTuts.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public Review getReview(@PathVariable(name = "id") UUID reviewId) {
        return reviewService.getReview(reviewId).orElseThrow(NotFoundException::new);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void updateReview(@RequestBody Map<String, String> json) {
        reviewService.updateReview(UUID.fromString(json.get("review_id")), json.get("content"), Integer.parseInt(json.get("rating")));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteReview(@PathVariable(name = "id") UUID reviewId) {
        reviewService.deleteReview(reviewId);
    }

    @GetMapping("/product/{id}")
    public List<Review> getReviewByProduct(@PathVariable(name = "id") UUID productId) {
        return reviewService.getReviewsByProductId(productId);
    }

    @GetMapping("/shop/{id}")
    public List<Review> getReviewByShop(@PathVariable(name = "id") UUID shopId) {
        return reviewService.getReviewsByShopId(shopId);
    }

    @GetMapping("/customer/{id}")
    public List<Review> getReviewByCustomer(@PathVariable(name = "id") UUID customerId) {
        return reviewService.getReviewsByCustomerId(customerId);
    }
}

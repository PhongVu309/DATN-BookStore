package com.example.bookstore.controller;

import com.example.bookstore.model.Product;
import com.example.bookstore.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/flash-sale")
    public List<Product> getFlashSaleProducts() {
        return productRepository.findByDiscountGreaterThan(30);
    }
}

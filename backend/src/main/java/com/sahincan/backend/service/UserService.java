package com.sahincan.backend.service;

import java.util.List;
import java.util.Optional;

import com.sahincan.backend.model.User;

public interface UserService {
    List<User> getAll();
    User getById(Long id);
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    User save(User user);
}
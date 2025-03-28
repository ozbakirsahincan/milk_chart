package com.sahincan.backend.service.impl;

import org.springframework.stereotype.Service;

import com.sahincan.backend.model.User;
import com.sahincan.backend.repository.UserRepository;
import com.sahincan.backend.service.UserService;

import lombok.*;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Override
    public List<User> getAll() {
        return repository.findAll();
    }

    @Override
    public User getById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı: " + id));
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public User save(User user) {
        return repository.save(user);
    }
}
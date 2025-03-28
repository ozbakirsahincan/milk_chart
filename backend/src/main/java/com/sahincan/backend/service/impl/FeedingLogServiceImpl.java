package com.sahincan.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sahincan.backend.model.FeedingLog;
import com.sahincan.backend.model.User;
import com.sahincan.backend.repository.FeedingLogRepository;
import com.sahincan.backend.service.FeedingLogService;

import lombok.*;

@Service
@RequiredArgsConstructor
public class FeedingLogServiceImpl implements FeedingLogService {

    private final FeedingLogRepository repository;

    @Override
    public List<FeedingLog> getAll() {
        return repository.findAllByOrderByDatetimeDesc();
    }

    @Override
    public FeedingLog getById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Log bulunamadı: " + id));
    }

    @Override
    public FeedingLog save(FeedingLog log) {
        return repository.save(log);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<FeedingLog> getByUser(User user) {
        return repository.findByUser(user);
    }
}
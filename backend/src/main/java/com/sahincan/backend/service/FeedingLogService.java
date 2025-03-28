package com.sahincan.backend.service;

import java.util.List;

import com.sahincan.backend.model.FeedingLog;
import com.sahincan.backend.model.User;

public interface FeedingLogService {
    List<FeedingLog> getAll();
    FeedingLog getById(Long id);
    FeedingLog save(FeedingLog log);
    void delete(Long id);
    List<FeedingLog> getByUser(User user);
}
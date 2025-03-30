package com.sahincan.backend.controller;

import com.sahincan.backend.dto.FeedingLogDto;
import com.sahincan.backend.mapper.FeedingLogMapper;
import com.sahincan.backend.model.FeedingLog;
import com.sahincan.backend.model.User;
import com.sahincan.backend.service.FeedingLogService;
import com.sahincan.backend.service.UserService;
import lombok.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feeding-logs")
@RequiredArgsConstructor
public class FeedingLogController {

    private final FeedingLogService feedingLogService;
    private final UserService userService;

    // Tüm kayıtları getir
    @GetMapping
    public ResponseEntity<List<FeedingLogDto>> getAllLogs() {
        List<FeedingLogDto> logs = feedingLogService.getAll()
            .stream()
            .map(FeedingLogMapper::toDto)
            .toList();
        return ResponseEntity.ok(logs);
    }

    // ID ile kayıt getir
    @GetMapping("/{id}")
    public ResponseEntity<FeedingLog> getLogById(@PathVariable Long id) {
        return ResponseEntity.ok(feedingLogService.getById(id));
    }

    // Kayıt oluştur
    @PostMapping
    public ResponseEntity<FeedingLog> createLog(@RequestBody FeedingLog log) {
        FeedingLog saved = feedingLogService.save(log);
        return ResponseEntity.ok(saved);
    }

    // Kayıt sil
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLog(@PathVariable Long id) {
        feedingLogService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // Kullanıcıya ait tüm kayıtlar
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<FeedingLog>> getLogsByUser(@PathVariable Long userId) {
        User user = userService.getById(userId);
        List<FeedingLog> logs = feedingLogService.getByUser(user);
        return ResponseEntity.ok(logs);
    }
}

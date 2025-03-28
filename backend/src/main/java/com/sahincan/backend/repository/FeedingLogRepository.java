package com.sahincan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sahincan.backend.model.FeedingLog;
import com.sahincan.backend.model.User;

import java.util.List;

@Repository
public interface FeedingLogRepository extends JpaRepository<FeedingLog, Long> {

    // Belirli kullanıcıya ait logları getir
    List<FeedingLog> findByUser(User user);

    // Opsiyonel: En son kayıtları sırala
    List<FeedingLog> findAllByOrderByDatetimeDesc();
}
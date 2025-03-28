package com.sahincan.backend.seeder;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sahincan.backend.model.FeedingLog;
import com.sahincan.backend.model.User;
import com.sahincan.backend.repository.FeedingLogRepository;
import com.sahincan.backend.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;


@Component
@RequiredArgsConstructor
public class FeedingLogSeeder {

    private final FeedingLogRepository feedingLogRepository;
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    @PostConstruct
    public void seedData() {
        if (feedingLogRepository.count() == 0) {
            try {
                InputStream is = new ClassPathResource("seeder/feedinglog.json").getInputStream();

                List<Map<String, Object>> logs = objectMapper.readValue(is, new TypeReference<>() {});

                for (Map<String, Object> entry : logs) {
                    Long userId = Long.valueOf(entry.get("userId").toString());
                    User user = userRepository.findById(userId)
                            .orElseThrow(() -> new RuntimeException("User not found: " + userId));

                    FeedingLog log = FeedingLog.builder()
                            .datetime(LocalDateTime.parse(
                                    entry.get("datetime") != null
                                            ? entry.get("datetime").toString().replace(" ", "T")
                                            : LocalDateTime.now().toString()
                            ))
                            .pee(entry.get("pee") != null
                                    ? Boolean.parseBoolean(entry.get("pee").toString())
                                    : false)
                            .poop(entry.get("poop") != null
                                    ? Boolean.parseBoolean(entry.get("poop").toString())
                                    : false)
                            .madeMilk(entry.get("madeMilk") != null
                                    ? Integer.parseInt(entry.get("madeMilk").toString())
                                    : 0)
                            .drankMilk(entry.get("drankMilk") != null
                                    ? Integer.parseInt(entry.get("drankMilk").toString())
                                    : 0)
                            .remainingMilk(entry.get("remainingMilk") != null
                                    ? Integer.parseInt(entry.get("remainingMilk").toString())
                                    : 0)
                            .description(entry.get("description") != null
                                    ? entry.get("description").toString()
                                    : "")
                            .user(user)
                            .build();

                    feedingLogRepository.save(log);
                }

                System.out.println("✅ Feeding log seed işlemi tamamlandı.");
            } catch (Exception e) {
                System.err.println("❌ Seed işlemi sırasında hata: " + e.getMessage());
                e.printStackTrace();
            }
        } else {
            System.out.println("⚠️ Zaten feeding log verisi mevcut. Seeder çalışmadı.");
        }
    }
}

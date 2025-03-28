package com.sahincan.backend.seeder;

import com.sahincan.backend.model.User;
import com.sahincan.backend.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserSeeder {

    private final UserRepository userRepository;

    @PostConstruct
    public void seedUser() {
        if (userRepository.count() == 0) {
            User user = User.builder()
                    .username("sahincan")
                    .email("sahincan@example.com")
                    .password("123456")
                    .build();

            userRepository.save(user);
            System.out.println("🟢 User seed işlemi tamamlandı. (id: " + user.getId() + ")");
        } else {
            System.out.println("ℹ️ Zaten kullanıcı mevcut. UserSeeder çalışmadı.");
        }
    }
}

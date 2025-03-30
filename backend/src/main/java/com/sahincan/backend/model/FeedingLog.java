package com.sahincan.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "feeding_logs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FeedingLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime datetime;

    private boolean pee;

    private boolean poop;

    private int madeMilk;

    private int drankMilk;

    private int remainingMilk;

    private String description;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;
}

package com.sahincan.backend.dto;

import java.time.LocalDateTime;

public record FeedingLogDto(
    Long id,
    LocalDateTime datetime,
    boolean pee,
    boolean poop,
    int madeMilk,
    int drankMilk,
    int remainingMilk,
    String description
) {}

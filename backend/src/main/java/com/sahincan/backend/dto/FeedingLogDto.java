package com.sahincan.backend.dto;
public record FeedingLogDto(
    Long id,
    String datetime,
    boolean pee,
    boolean poop,
    int madeMilk,
    int drankMilk,
    int remainingMilk,
    String description
) {}

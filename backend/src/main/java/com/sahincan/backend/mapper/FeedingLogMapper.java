package com.sahincan.backend.mapper;

import com.sahincan.backend.dto.FeedingLogDto;
import com.sahincan.backend.model.FeedingLog;

import java.time.format.DateTimeFormatter;

public class FeedingLogMapper {

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

    public static FeedingLogDto toDto(FeedingLog log) {
        return new FeedingLogDto(
                log.getId(),
                log.getDatetime().format(FORMATTER),
                log.isPee(),
                log.isPoop(),
                log.getMadeMilk(),
                log.getDrankMilk(),
                log.getRemainingMilk(),
                log.getDescription()
        );
    }
}

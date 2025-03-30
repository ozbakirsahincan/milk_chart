package com.sahincan.backend.mapper;

import com.sahincan.backend.dto.FeedingLogDto;
import com.sahincan.backend.model.FeedingLog;

public class FeedingLogMapper {
    public static FeedingLogDto toDto(FeedingLog log) {
        return new FeedingLogDto(
            log.getId(),
            log.getDatetime(),
            log.isPee(),
            log.isPoop(),
            log.getMadeMilk(),
            log.getDrankMilk(),
            log.getRemainingMilk(),
            log.getDescription()
        );
    }
}

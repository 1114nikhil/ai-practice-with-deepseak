package ai.springboot.ai_service.application.port.in;

import ai.springboot.common.dto.ChatRequest;
import ai.springboot.common.dto.ChatResponse;

public interface ChatUseCase {
    ChatResponse chat(ChatRequest request);
}

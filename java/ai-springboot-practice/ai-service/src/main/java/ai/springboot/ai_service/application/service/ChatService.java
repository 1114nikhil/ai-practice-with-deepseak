package ai.springboot.ai_service.application.service;

import ai.springboot.ai_service.application.port.in.ChatUseCase;
import ai.springboot.ai_service.application.port.out.LLMClientPort;
import ai.springboot.common.dto.ChatRequest;
import ai.springboot.common.dto.ChatResponse;
import ai.springboot.common.exception.AIServiceException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class ChatService implements ChatUseCase {

    private final LLMClientPort llmClientPort;

    @Override
    public ChatResponse chat(ChatRequest request) {
        if(request.message()==null||request.message().isBlank()){
            throw new AIServiceException("Message must not be empty!");
        }
        String reply=llmClientPort.generate(request.message());
        return new ChatResponse(reply,"anthropic");
    }
}

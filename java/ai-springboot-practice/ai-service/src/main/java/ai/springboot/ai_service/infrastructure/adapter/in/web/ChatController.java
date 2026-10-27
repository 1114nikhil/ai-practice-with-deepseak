package ai.springboot.ai_service.infrastructure.adapter.in.web;


import ai.springboot.ai_service.application.port.in.ChatUseCase;
import ai.springboot.common.dto.ChatRequest;
import ai.springboot.common.dto.ChatResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "AI Chat", description = "AI conversation interface")
@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatUseCase chatUseCase;

    @Operation(summary = "Send a message to Claude", description = "Returns the AI's reply")
    @PostMapping
    public ChatResponse chat(@RequestBody ChatRequest request){
        return chatUseCase.chat(request);
    }
}

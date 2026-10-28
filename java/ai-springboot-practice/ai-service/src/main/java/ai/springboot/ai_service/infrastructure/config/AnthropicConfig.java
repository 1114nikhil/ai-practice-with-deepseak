package ai.springboot.ai_service.infrastructure.config;

import org.springframework.ai.anthropic.AnthropicChatModel;
import org.springframework.ai.anthropic.AnthropicChatOptions;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AnthropicConfig {

    @Value("${ANTHROPIC_API_KEY}")
    private String apiKey;
    @Value("${MAX_TOKENS}")
    private int maxTokens;
    @Value("${MODEL}")
    private String model;
    @Value("${TEMPERATURE}")
    private double temperature;

    @Bean
    public AnthropicChatModel anthropicChatModel(){
        return AnthropicChatModel.builder()
                .options(AnthropicChatOptions.builder()
                        .apiKey(apiKey)
                        .model(model)
                        .maxTokens(maxTokens)
                        .temperature(temperature)
                        .build())
                .build();
    }

    @Bean
    public ChatClient.Builder chatClientBuilder(AnthropicChatModel chatModel) {
        return ChatClient.builder(chatModel);
    }
}

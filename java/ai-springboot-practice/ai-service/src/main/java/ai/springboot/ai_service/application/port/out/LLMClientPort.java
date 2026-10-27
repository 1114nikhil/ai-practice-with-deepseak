package ai.springboot.ai_service.application.port.out;

public interface LLMClientPort {
    String generate(String prompt);
}

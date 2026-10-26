import os
from pathlib import Path
from dotenv import load_dotenv


PROJECT_ROOT= Path(__file__).resolve().parent.parent
DOTENV_PATH=PROJECT_ROOT/".env"

if DOTENV_PATH.exists:
    load_dotenv(dotenv_path=DOTENV_PATH,override=False)
else:
    print("No .env file found in projec")

class AIConfig:
    ALLOWED_PROVIDER={"anthropic","gemini","openai","voyage"}

    def __init__(self):
        self.provider=os.getenv("AI_PROVIDER","anthropic").lower().strip()
        self.api_key=os.getenv("ANTHROPIC_API_KEY").strip()
        self.model=os.getenv("AI_MODEL","").strip()

        if not self.api_key:
            raise RuntimeError("ANTHROPIC_API_KEY not set refuse to Start...")
        if len(self.api_key)<20:
            raise ValueError("ANTHROPIC_API_KEY looks malformed")
        # if not self.model:
        #     raise RuntimeError("AI_MODEL not set refuse to Start...")

    def __repr__(self):
        return f"AIConfig(provider={self.provider}. api_key=***)"

if __name__=="__main__":
    cfg=AIConfig()
    print(cfg)

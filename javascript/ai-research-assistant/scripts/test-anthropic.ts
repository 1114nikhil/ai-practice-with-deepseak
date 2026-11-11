import { generateText } from "ai"
import {anthropic} from "@ai-sdk/anthropic";
import "dotenv/config"


async function test() {
    const model = process.env.MODEL;
    if (!model) {
    throw new Error("ANTHROPIC_MODEL is missing in .env.local");
  } 
    const {text}=await generateText({
        model: anthropic(model),
        prompt:"Reply with exactly: Connection Ok!"
    })
    console.log("Anthropic Say:",text)
}

test();
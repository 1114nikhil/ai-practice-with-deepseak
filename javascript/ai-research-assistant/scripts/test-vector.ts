import "dotenv/config";
import { vectorIndex } from "@/lib/rag/vector_client";


async function test(){
    await vectorIndex.upsert({
        id:"test-1",
        vector:Array(1536).fill(0.1),
        metadata:{text:"hello"}
    });
    console.log("Upsert works!")
}

test();
import "dotenv/config";
import { readdir,readFile } from "node:fs/promises";

import path from "node:path"
import { vectorIndex } from "./vector_client";

function chunkText(text:string,maxChar=800,overlap=100):string[]{
    const chunks:string[]=[]
    let start =0;

    while(start<text.length){
        const end=Math.min(start+maxChar,text.length);
        chunks.push(text.slice(start,end).trim())
        if(end===text.length)break;
        start=end-overlap;
    }

    return chunks.filter(c=>c.length>0)
}


async function ingest(){
    const docsDir=path.join(process.cwd(),"docs");
    const files=await readdir(docsDir)

    let totalChunks =0;

    for (const file of files){
        if(!file.endsWith(".txt")) continue;

        const fullPath=path.join(docsDir,file);
        const text=await readFile(fullPath, "utf-8");
        const chunks=chunkText(text);


        const payload=chunks.map((chunk,i)=>({
           
                    id:`${file}:${i}`,
                    data:`${chunk}`,
                    metadata:{
                        "source":`${file}`,
                        "chunkIndex":`${i}`,
                        "text":`${chunk}`
                    }
                
        }));

        await vectorIndex.upsert(payload);
        totalChunks +=chunks.length
         console.log(`Ingested ${file}: ${chunks.length} chunks`);
    }
     console.log(`Done. Total chunks: ${totalChunks}`);
}

ingest().catch((err) => {
  console.error("Ingest failed:", err);
  process.exit(1);
});
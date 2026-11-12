import "dotenv/config"

function chunkTest(text:string,maxChar=800,overlap=100):string[]{
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



from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import httpx
import spacy
from app.nlp_processor import process_text
from app.database import store_data

app = FastAPI()

nlp = spacy.load("en_core_web_sm")

class TextRequest(BaseModel):
    text: str

@app.post("/process-text")
async def process_text_endpoint(request: TextRequest):
    text = request.text
    entities, mwes = process_text(nlp, text)
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get("https://httpbin.org/delay/3")
        except httpx.RequestError:
            raise HTTPException(status_code=503, detail="External API request failed")
    
    store_data(text, entities, mwes)
    
    return {
        "original_text": text,
        "entities": entities,
        "mwes": mwes
    }
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import httpx
import spacy
from app.nlp_processor import process_text
from app.database import store_data
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

app = FastAPI()

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, lambda request, exc: HTTPException(status_code=429, detail="Rate limit exceeded"))

app.add_middleware(SlowAPIMiddleware)

nlp = spacy.load("en_core_web_sm")

class TextRequest(BaseModel):
    text: str

@app.post("/process-text")
@limiter.limit("5/minute")
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
from fastapi import APIRouter, HTTPException, Request, Depends
from app.models.request import TextRequest
from app.services.text_service import TextService
from slowapi import Limiter

router = APIRouter()
limiter = Limiter(key_func=lambda request: request.client.host)

@router.post("/process-text")
@limiter.limit("5/minute")
async def process_text_endpoint(request: Request, text_request: TextRequest, service: TextService = Depends(TextService)):
    try:
        result = await service.process_text(text_request.text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

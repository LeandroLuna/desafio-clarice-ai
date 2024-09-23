from fastapi import APIRouter, HTTPException, Request, Depends
from app.models.request import TextRequest
from app.services.text_service import TextService
from slowapi import Limiter

router = APIRouter()
limiter = Limiter(key_func=lambda request: request.client.host)

@router.post(
    "/process-text",
    summary="Processar texto e extrair entidades nomeadas (NER) e MWEs",
    description="""
    Endpoint para processar um texto utilizando o modelo spaCy para:
    
    1. Reconhecimento de Entidades Nomeadas (NER): Identifica entidades (ex.: pessoas, organizações, locais).
    2. Expressões de Várias Palavras (MWEs): Detecta expressões compostas no texto.
    
    O endpoint também faz uma chamada assíncrona para uma API externa simulada, sem impactar o resultado.
    """,
    response_description="Texto processado com sucesso, incluindo entidades e MWEs detectadas.",
    responses={
        200: {
            "description": "Sucesso no processamento do texto",
            "content": {
                "application/json": {
                    "example": {
                        "original_text": "Barack Obama was the 44th president of the United States.",
                        "entities": [
                            {"entity": "Barack Obama", "label": "PERSON", "start": 0, "end": 12},
                            {"entity": "United States", "label": "GPE", "start": 38, "end": 51}
                        ],
                        "mwes": [
                            {"expression": "44th president", "start": 13, "end": 28}
                        ]
                    }
                }
            }
        },
        429: {"description": "Limite de requisições excedido"},
        500: {"description": "Erro interno no servidor"},
    },
)
@limiter.limit("5/minute")
async def process_text_endpoint(request: Request, text_request: TextRequest, service: TextService = Depends(TextService)):
    """
    Processa um texto fornecido no corpo da requisição e retorna entidades nomeadas (NER) e MWEs.

    ## Parâmetros:
    - **request**: Objeto da requisição HTTP.
    - **text_request**: Modelo que contém o texto a ser processado.
    - **service**: Serviço de processamento de texto (injeção de dependência).
    
    ## Respostas:
    - **200**: Sucesso no processamento do texto.
    - **429**: Limite de requisições excedido.
    - **500**: Erro interno no servidor
    """
    
    try:
        result = await service.process_text(text_request.text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
from fastapi import FastAPI
from app.api.controllers import router
from slowapi.middleware import SlowAPIMiddleware
from app.core.settings import limiter

app = FastAPI(
    title="API de Processamento de Texto",
    description="Esta API processa texto usando o spaCy para fazer reconhecimento de entidades nomeadas (NER) e identificar expressões de várias palavras (MWEs). Além disso, faz chamadas assíncronas a uma API externa e implementa limitação de taxa (rate limiting).",
    contact={
        "name": "Leandro Luna",
        "url": "https://www.linkedin.com/in/luna-leandro",
        "email": "leandro.j.luna@gmail.com",
    },
    version="1.0.0",
)

app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)
app.include_router(router)
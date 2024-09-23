from fastapi import FastAPI
from app.api.controllers import router
from slowapi.middleware import SlowAPIMiddleware
from app.core.settings import limiter

app = FastAPI()

app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)
app.include_router(router)
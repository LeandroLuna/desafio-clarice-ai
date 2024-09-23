import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app

@pytest.mark.asyncio
async def test_process_text():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.post("/process-text", json={"text": "Barack Obama was the 44th president of the United States."})
    
    assert response.status_code == 200
    json_response = response.json()
    assert json_response["original_text"] == "Barack Obama was the 44th president of the United States."
    assert "entities" in json_response
    assert "mwes" in json_response
    assert len(json_response["entities"]) > 0

@pytest.mark.asyncio
async def test_rate_limiting():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        for _ in range(6): 
            response = await client.post("/process-text", json={"text": "Barack Obama was the 44th president."})
        assert response.status_code == 429 
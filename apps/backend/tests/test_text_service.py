import pytest
from app.services.text_service import TextService
from app.factories.spacy_factory import SpacyFactory

@pytest.mark.asyncio
async def test_process_text_service():
    service = TextService(nlp=SpacyFactory.create())
    result = await service.process_text("Barack Obama was the 44th president of the United States.")
    
    assert result["original_text"] == "Barack Obama was the 44th president of the United States."
    assert len(result["entities"]) > 0
    assert len(result["mwes"]) > 0
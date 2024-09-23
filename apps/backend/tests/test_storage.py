import pytest
from app.repositories.storage import StorageRepository

def test_store_data():
    repo = StorageRepository()
    repo.store("Barack Obama was the 44th president.", [("Barack Obama", "PERSON", 0, 12)], [("44th president", 16, 31)])
    
    data = repo.get_all()
    assert len(data) == 1
    assert data[0]["text"] == "Barack Obama was the 44th president."
    assert len(data[0]["entities"]) > 0
    assert len(data[0]["mwes"]) > 0
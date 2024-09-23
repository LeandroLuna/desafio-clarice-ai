from app.factories.spacy_factory import SpacyFactory
from app.repositories.storage import StorageRepository
import httpx

class TextService:
    def __init__(self, nlp=SpacyFactory.create(), storage=StorageRepository()):
        self.nlp = nlp
        self.storage = storage

    async def process_text(self, text: str):
        doc = self.nlp(text)
        entities = [(ent.text, ent.label_, ent.start_char, ent.end_char) for ent in doc.ents]
        mwes = [(chunk.text, chunk.start_char, chunk.end_char) for chunk in doc.noun_chunks]

        async with httpx.AsyncClient() as client:
            await client.get("https://httpbin.org/delay/3")

        self.storage.store(text, entities, mwes)

        return {
            "original_text": text,
            "entities": entities,
            "mwes": mwes
        }

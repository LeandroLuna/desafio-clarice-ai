class StorageRepository:
    def __init__(self):
        self.data = []

    def store(self, text, entities, mwes):
        self.data.append({
            "text": text,
            "entities": entities,
            "mwes": mwes
        })

    def get_all(self):
        return self.data
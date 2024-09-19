db = []

def store_data(text: str, entities: list[dict], mwes: list[dict]):
    db.append({
        "text": text,
        "entities": entities,
        "mwes": mwes
    })

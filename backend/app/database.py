from typing import List, Dict

db = []

def store_data(text: str, entities: List[Dict], mwes: List[Dict]):
    db.append({
        "text": text,
        "entities": entities,
        "mwes": mwes
    })

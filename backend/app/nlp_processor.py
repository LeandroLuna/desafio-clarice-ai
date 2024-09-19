from typing import List, Dict
import spacy

def process_text(nlp: spacy.Language, text: str) -> (List[Dict], List[Dict]):
    doc = nlp(text)
    
    entities = [{"text": ent.text, "start": ent.start_char, "end": ent.end_char, "label": ent.label_} for ent in doc.ents]
    
    mwes = [{"text": chunk.text, "start": chunk.start_char, "end": chunk.end_char} for chunk in doc.noun_chunks]
    
    return entities, mwes
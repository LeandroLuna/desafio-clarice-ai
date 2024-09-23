import spacy

class SpacyFactory:
    @staticmethod
    def create():
        return spacy.load("en_core_web_sm")

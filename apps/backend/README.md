# Backend

## Descrição

Esta é uma solução para o exercício técnico de back-end, que visa construir uma API assíncrona usando Python, FastAPI, e a biblioteca de NLP (Processamento de Linguagem Natural) **spaCy**. A API processa textos, extraindo entidades nomeadas (NER) e detectando expressões de várias palavras (MWEs). O projeto foi desenvolvido de acordo com os princípios SOLID e utiliza padrões de projeto, como a Arquitetura Limpa e DDD, para manter o código organizado e extensível.

## Objetivo 

Avaliar a capacidade de interagir com APIs assíncronas, utilizar Python de forma eficiente e integrar bibliotecas de PNL (spaCy).

---

## Exercício 

API Simples de Processamento de Texto com Comportamento Assíncrono e Componente Personalizado no spaCy

## Requisitos

1. Construir uma API baseada em Python para processar dados de texto de forma assíncrona.
    - A API deve expor um endpoint `/process-text` que aceite uma solicitação POST com um texto (payload em JSON).
    
2. **Processamento de texto com spaCy:**
    - Ao receber o texto, utilize o spaCy para realizar tanto o Reconhecimento de Entidades Nomeadas (NER) quanto a detecção de Expressões de Várias Palavras (MWEs) no texto.
    - A resposta deve retornar:
        - O texto original
        - As entidades extraídas (por exemplo, Pessoa, Organização, Local) no texto, juntamente com seus tipos e posições
        - As Expressões de Várias Palavras (MWEs) identificadas, com suas posições no texto
        
3. **Comportamento assíncrono:**
    - Para simular uma operação assíncrona, a API também deve chamar uma API externa simulada (por exemplo, o delay do httpbin) com um atraso de 3 segundos de forma assíncrona, que registrará algumas informações (como um timestamp ou texto aleatório), mas que não afete o resultado.
    - Certifique-se de que a API consiga lidar tanto com o processamento de texto quanto com as chamadas de API externa sem bloqueio.
    
4. **Bônus (opcional):**
    - Armazenar os dados processados em um banco de dados em memória.
    - Implementar uma limitação de taxa (rate limiting) básica para evitar uso excessivo.

---

## Funcionalidades

- Processamento de texto com **Reconhecimento de Entidades Nomeadas (NER)** usando spaCy.
- Detecção de **Expressões de Várias Palavras (MWEs)**.
- API externa simulada para comportamento assíncrono usando httpbin.
- Limitação de taxa (rate limiting) para controle de acesso excessivo.
- Armazenamento opcional em banco de dados em memória.

## Tecnologias utilizadas

- **FastAPI**: framework assíncrono para criação de APIs.
- **spaCy**: biblioteca de processamento de linguagem natural.
- **httpx**: biblioteca para fazer requisições HTTP de forma assíncrona.
- **Pydantic**: validação de dados para entrada/saída de APIs.
- **pytest**: ferramenta de teste para código Python.

## Instalação

1. Clone o repositório:
   ```bash
    git clone https://github.com/LeandroLuna/desafio-clarice-ai.git
    cd desafio-clarice-ai/backend
    ```

2. Crie e ative um ambiente virtual:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # No Windows, use `venv\Scripts\activate`
    ```

3. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

4. Baixe o modelo de linguagem spaCy:
    ```bash
    python -m spacy download en_core_web_sm
    ```

5. Execute o servidor:
    ```bash
    uvicorn app.main:app --reload
    ```

## Uso

Uma vez que o servidor esteja rodando, a API pode ser acessada através de http://127.0.0.1:8000.

Para processar um texto, faça uma solicitação POST para o endpoint /process-text com um payload JSON:

### Exemplo de requisição
    ```bash
    curl -X 'POST' \
    'http://127.0.0.1:8000/process-text' \
    -H 'Content-Type: application/json' \
    -d '{
    "text": "Barack Obama was the 44th president of the United States."
    }'
    ```
    
### Exemplo de resposta
    ```json
    {
    "original_text": "Barack Obama was the 44th president of the United States.",
    "entities": [
        {"entity": "Barack Obama", "label": "PERSON", "start": 0, "end": 12},
        {"entity": "United States", "label": "GPE", "start": 42, "end": 55}
    ],
    "mwes": [
        {"expression": "United States", "start": 42, "end": 55}
    ]
    }
    ```

## Testes

Para rodar os testes, utilize o pytest:
    ```bash
    pytest
    ```

Os testes verificam o correto funcionamento da API, incluindo as funcionalidades de processamento de texto e limitação de taxa.
# Desafio Clarice AI

Este repositório é dedicado ao desafio técnico para a vaga de Desenvolvedor Fullstack Pleno na Clarice AI. As aplicações estão organizadas em um monorepo, utilizando o TurboBuild para facilitar o gerenciamento e o deploy.

## Estrutura do repositório

As aplicações estão separadas nas seguintes pastas dentro do diretório 'apps':

- **frontend**: Contém a aplicação front-end, construída com Next.js.
- **backend**: Contém a aplicação back-end, desenvolvida com FastAPI.

## Inicialização local

Para facilitar a inicialização das aplicações em um ambiente local, você pode utilizar o Docker Compose. Isso permite que ambas as aplicações sejam executadas em contêineres Docker, garantindo um ambiente consistente.

### Executando com Docker Compose

1. **Certifique-se de que o Docker está instalados em sua máquina.**

2. **Na raiz do repositório, execute o seguinte comando para iniciar as aplicações:**
   ```bash
   docker-compose up
    ```

    Isso irá construir as imagens necessárias e iniciar os contêineres.

3. Acesse as aplicações:
- A aplicação front-end estará disponível em: http://localhost:3000
- A aplicação back-end estará disponível em: http://localhost:8000

4. Para parar as aplicações, use:
   ```bash
   docker-compose down
   ```

## Detalhes das aplicações

Para mais informações sobre como rodar e utilizar cada aplicação, consulte os arquivos README de cada uma delas.
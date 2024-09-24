# Frontend

## Objetivo

Avaliar a capacidade de construir uma interface simples, funcional e responsiva utilizando React e Next.js, incorporando gerenciamento de estado, roteamento e interação com uma API pública.

---

## Exercício 

Construir uma página de blog simples com interação com API

## Requisitos

1. **Página de visão geral do blog:**
   - Crie uma página de visão geral do blog onde os usuários possam ver uma lista de postagens. Busque as postagens de uma API externa (por exemplo, API JSONPlaceholder).
   - Cada postagem na lista deve exibir o título e uma versão truncada do conteúdo (por exemplo, os primeiros 50 caracteres).
   - As postagens devem ser paginadas (5 postagens por página).
   - Use a Renderização no Servidor (SSR - Server Side Rendering) ou Geração Estática (getStaticProps) do Next.js para pré-buscar as postagens.

2. **Página de detalhes do blog:**
   - Quando o usuário clicar em uma postagem, deve navegar para uma página de detalhes (usando roteamento dinâmico no Next.js).
   - Exibir o conteúdo completo da postagem junto com o nome do autor (também buscado da API).
   - A página deve ter um botão de voltar para retornar à página de visão geral do blog.

3. **Bônus (opcional):**
   - Implementar uma funcionalidade simples de pesquisa, onde os usuários possam pesquisar uma postagem pelo título.
   - Usar um framework de CSS (por exemplo, TailwindCSS) para estilizar o aplicativo.

### Critérios de avaliação:
- Estrutura e legibilidade do código
- Uso adequado de React Hooks e recursos do Next.js (por exemplo, SSR, geração estática, roteamento dinâmico)
- Capacidade de gerenciar estado 
- Responsividade da interface e design básico
- Tratamento de erros e interação limpa com a API

---

## Instalação

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/LeandroLuna/desafio-clarice-ai.git
   ```

2. Navegue até o diretório do projeto:
    ```bash
    cd desafio-clarice-ai/frontend
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o projeto:
    ```bash
    npm run dev
    ```

5. Acesse o aplicativo no seu navegador: http://localhost:3000

## Tecnologias Utilizadas
- React: biblioteca JavaScript para construção de interfaces.
- Next.js: framework React para renderização no servidor e geração estática.
- Axios: biblioteca para fazer requisições HTTP.
- TypeScript: superset de JavaScript que adiciona tipagem estática.
- TailwindCSS: framework CSS para estilização rápida e responsiva.

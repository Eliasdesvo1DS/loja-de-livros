# Livraria demonstrativa — estilo Mercado Livre

Loja virtual educacional com tema de livros, feita em HTML, CSS e JavaScript puro. O visual usa azul, amarelo e branco, inspirado em marketplaces.

> Projeto independente, não afiliado ao Mercado Livre. Os livros, preços, descontos e condições são ilustrativos. O site não processa pagamentos nem pedidos reais.

## Funcionalidades
- Catálogo de livros com título, autor, gênero e preço.
- Busca por nome, autor, gênero ou descrição.
- Filtros por categoria: Literatura, Fantasia, Desenvolvimento e Estudos.
- Carrinho com adicionar, remover e alterar quantidades.
- Carrinho salvo no navegador com `localStorage`.
- Layout responsivo para celular e computador.
- Estados acessíveis nos filtros de categoria (`aria-pressed`) e mensagens de status para ações importantes.
- Imagem da atividade DOM otimizada para reduzir o tempo de carregamento.
- Página extra `aula-dom.html` com atividades de manipulação do DOM em JavaScript.

## Estrutura
```text
Loja-MercadoLivre/
├── index.html
├── aula-dom.html
├── css/
│   ├── style.css
│   └── dom-aula.css
├── js/
│   ├── script.js
│   └── dom-aula.js
├── assets/
│   └── images/
└── README.md
```

## Testar
Extraia o ZIP e abra `index.html` no navegador. Para as atividades de DOM, clique em **Aula DOM** no menu ou abra `aula-dom.html`. Não precisa instalar dependências.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Selecione **Add file → Upload files** e envie o conteúdo desta pasta.
3. Clique em **Commit changes**.
4. Abra **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Selecione `main` e a pasta `/(root)` e salve.
7. Aguarde o GitHub publicar o endereço na seção Pages.

## Checklist de testes antes de entregar
- [ ] Abrir `index.html` e confirmar que os 12 livros aparecem.
- [ ] Pesquisar por título e autor; depois limpar os filtros.
- [ ] Filtrar por cada categoria no menu e nos botões da seção.
- [ ] Adicionar dois livros ao carrinho, mudar quantidades e remover um item.
- [ ] Atualizar a página e confirmar que o carrinho continua salvo.
- [ ] Abrir `aula-dom.html` e testar as cinco atividades.
- [ ] Testar o layout em celular e computador.

## Observação importante
Este é um projeto educacional demonstrativo. Os valores e descontos são fictícios e o botão de finalizar compra não realiza pagamentos.

## Personalizar
- Catálogo e preços: `js/script.js`, na lista `products`.
- Cores e aparência das capas ilustrativas: `css/style.css`.
- Textos e estrutura: `index.html`.

# Coleções

O objetivo desse projeto é criar uma aplicação na qual disponibilizamos duas listagens de personagens para o usuário. A primeira lista será do Rick and Morty e a segunda de Pokemons. Cada lista deve-se apresentar em sua respectiva página, com um campo de busca e botões para a paginação.

Além da listagem, o usuário poderá adicionar um determinado personagem a sua lista de personagens favoritos, que por sua vez também terá sua própria página. Uma para os pokémons favoritos e outra para os personagens da série Rick and Morty.

Uma vez com o personagem favoritado, o usuário poderá remover o mesmo da lista de favoritos.

Exemplo: Se eu clico em um personagem da listagem de pokémons, ele deverá ser adicionado na lista de favoritos de pokémons ou se eu clicar em um personagem do Rick and Morty, deverá ser adicionado em outra lista de favoritos dos personagens do Rick and Morty.

obs: Vamos trabalhar apenas com os 150 primeiros Pokemons!

### Detalhes API Rick And Morty

Use a url, mudando apenas o número do parâmetro page, de acordo com a página desejada: (Links to an external site.)https://rickandmortyapi.com/api/character/?page=1 (Links to an external site.)
Essa API é bem completa e já vem tudo que precisa 🥳

### Detalhes API Pokemon:

Para a paginação na API do pokemon, ela deve ser passado na URL como o offset:

Ex.: https://pokeapi.co/api/v2/pokemon?offset=20&limit=20

O limit serve para informar quando o máximo de elemento que a api deve retornar.

Já o offset serve para informar a API a partir de qual elemento ela deve retornar. No exemplo acima, a API retornaria a partir do elemento 20 . Ou seja, caso queria ir para a próxima página, o offset será 40, depois 60... e assim por diante. Caso não queria fazer paginação, simplesmente use uma url sem offset e com o limit de 150:

Exemplo: https://pokeapi.co/api/v2/pokemon?limit=150

O endpoint de listagem de Pokemons não retorna a url da imagem do Pokemon, portanto use essa de base, é só colocar no final, o ID do pokemon: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{ID}.png

Exemplo https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png

Porém, a listagem de Pokemons também não retorna o ID diretamente, a única coisa que a listagem retorna para cada elemento é:

```javascript
{
  "name": "bulbasaur",
  "url": "<https://pokeapi.co/api/v2/pokemon/1/>"
},
```

Você pode utilizar a string do atributo url e trata-la para pegar o ID. Uma boa ideia seria quebrar a string e array, separando por /, e pegar o ultimo elemento do array.

Exemplo:

```javascript
const brokenUrl = url.split("/");
const id = brokenUrl[brokenUrl.length - 1]
)
```

https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

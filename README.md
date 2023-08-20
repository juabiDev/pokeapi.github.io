# Desafio 1

Renderizar un listado de pokemones, se debe mostrar el nombre de cada pokemon.

Endpoint: https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

# Desafio 2

Realizar un filtro de busqueda a partir del tipo de pokemon (fuego, agua, volador, fantasma, psiquico).

Endpoints

Tipo fuego: https://pokeapi.co/api/v2/type/10/
Tipo agua: https://pokeapi.co/api/v2/type/11/
Tipo fantasma: https://pokeapi.co/api/v2/type/8/
Tipo volador: https://pokeapi.co/api/v2/type/3/
Tipo psiquico: https://pokeapi.co/api/v2/type/14/


# Desafio 3

Realizar un filtro de busqueda para encontrar un unico pokemon.

Endpoint Example: https://pokeapi.co/api/v2/pokemon/dragonite

# Desafiate

No seria divertido mostrar tambien la imagen de los pokemones y tal vez alguno de sus ataques especiales?

Si observamos al momento de hacer la peticion a la API utilizando una URL para buscar un pokemon en particular como en el Desafio 3, podemos ver que en el atributo sprites se encuentra la imagen del pokemon.

Tambien podemos ver que en el atributo abilities se encuentran los ataques especiales del pokemon.

# Aclaraciones

Para ahorrar tiempo ya tenemos la estructura HTML y el estilo CSS

Desafio 1: El contenedor del listado es el section con id "pokemons-section"

Desafio 2: Ya tenemos creado los botones de busqueda

Desafio 3: la busqueda debe ser a partir del pokemon ingresado en el input

Al momento de crear las cards de los pokemons se debe agregar la clase "pokemon-card" en el contenedor de cada pokemon


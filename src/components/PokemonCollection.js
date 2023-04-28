import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList }) {

  const cardElements = pokemonList.map(pokemon =>
    <PokemonCard
      key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      hp={pokemon.hp}
      frontSprite={pokemon.sprites.front}
      backSprite={pokemon.sprites.back}
    />
    )

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {cardElements}
    </Card.Group>
  );
}

export default PokemonCollection;

import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const pokemonUrl = 'http://localhost:3001/pokemon'

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  function submitNewPokemon(newPokemon) {
    fetch(pokemonUrl, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(getPokemon)
  }

  function pokemonSearch(e) {
    setSearchTerm(e.target.value)
  }

  const dislayedPokemon = pokemonList.filter(pokemon => 
  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(getPokemon, [])
  function getPokemon() {
    fetch(pokemonUrl)
      .then(r => r.json())
      .then(setPokemonList)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm submitNewPokemon={submitNewPokemon} />
      <br />
      <Search
        searchTerm={searchTerm}
        pokemonSearch={pokemonSearch}
      />
      <br />
      <PokemonCollection pokemonList={dislayedPokemon} />
    </Container>
  );
}

export default PokemonPage;

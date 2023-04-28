import React from "react";

function Search({searchTerm, pokemonSearch}) {


  return (
    <div className="ui search">

      <div className="ui icon input">
        
        <input className="prompt"
          onChange={pokemonSearch}
          value={searchTerm}
        />
        
        <i className="search icon" />
      
      </div>
    
    </div>
  );
}

export default Search;

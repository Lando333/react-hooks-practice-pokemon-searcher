import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, frontSprite, backSprite }) {
  
  const [isFacingUp, setIsFacingUp] = useState(true)

  function flipCard() {
    setIsFacingUp(!isFacingUp)
  }

  return (
    <Card>
      <div onClick={flipCard} id={id} >
        # {id}
        <div className="image">
          <img src={isFacingUp?frontSprite:backSprite} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

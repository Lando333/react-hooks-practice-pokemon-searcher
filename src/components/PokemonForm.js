import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ submitNewPokemon }) {

  const [formName, setFormName] = useState("")
  const [formHp, setFormHp] = useState(0)
  const [formFrontImg, setFormFrontImg] = useState("")
  const [formBackImg, setFormBackImg] = useState("")

  const newPokemon = {
    name: formName,
    hp: formHp,
    sprites: {
      front: formFrontImg,
      back: formBackImg
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          submitNewPokemon(newPokemon);
        }}
      >
        <Form.Group widths="equal">

          <Form.Input
            fluid label="Name"
            placeholder="Name"
            name="name"
            value={formName}
            onChange={e => setFormName(e.target.value)}
          />
          <Form.Input
            fluid label="hp"
            placeholder="hp"
            name="hp"
            value={formHp}
            onChange={e => setFormHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formFrontImg}
            onChange={e => setFormFrontImg(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formBackImg}
            onChange={e => setFormBackImg(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

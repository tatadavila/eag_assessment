// @modules
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreatePokemon = ({ show, setShow, setPokemons, pokemons }) => {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    image: "",
    types: "",
    weight: null,
  });
  const handleClose = () => setShow(false);
  const handleChange = (event) => {
    setNewPokemon({ ...newPokemon, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPokemons([...pokemons, newPokemon]);
    handleClose();
  };

  console.log(newPokemon);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Pokemon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Pokemon Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name.."
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter url.."
              name="image"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Types</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter types.."
              name="types"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter weight.."
              name="weight"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePokemon;

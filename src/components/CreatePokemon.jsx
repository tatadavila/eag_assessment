// @modules
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// @slices
import { setOpenCreatePokemon, setPokemons } from "../slices";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.data.pokemons);
  const show = useSelector((state) => state.ui.openCreatePokemon);

  const [newPokemon, setNewPokemon] = useState({
    name: "",
    image: "",
    types: [],
    weight: null,
  });

  const handleClose = () => dispatch(setOpenCreatePokemon(false));
  const handleChange = (event) => {
    if (event.target.name === "types") {
      setNewPokemon({ ...newPokemon, types: event.target.value.split(" ") });
    } else {
      setNewPokemon({ ...newPokemon, [event.target.name]: event.target.value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setPokemons([newPokemon, ...pokemons]));

    handleClose();
  };

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
            <Form.Text className="text-muted">
              Separate each type with a space.
            </Form.Text>
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

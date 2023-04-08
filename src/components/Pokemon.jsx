import { Card, Col, Row } from "react-bootstrap";

// @styles
import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  return (
    <Card className="Pokemon__Card">
      <Card.Img variant="top" src={pokemon.image} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Footer>
          <Row>
            <Col>Types:</Col>
            <Col>Weight</Col>
          </Row>
          <Row>
            <Col>
              {pokemon
                ? pokemon.types?.map((type, index) => {
                    return `${type}${
                      index < pokemon.types.length - 1 ? ", " : ""
                    }`;
                  })
                : null}
            </Col>
            <Col>{pokemon.weight}</Col>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;

import { Card, Col, Row } from "react-bootstrap";
const Pokemon = ({ key, pokemon }) => {
  return (
    <Card key={key} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pokemon.image} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col>Types:</Col>
            <Col>Weight</Col>
          </Row>
          <Row>
            <Col>
              {pokemon
                ? pokemon.types.map((type, index) => {
                    const { name } = type.type;
                    return `${name}${
                      index < pokemon.types.length - 1 ? ", " : ""
                    }`;
                  })
                : null}
            </Col>
            <Col>{pokemon.weight}</Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;

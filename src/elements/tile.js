
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs'

export class Tile {
  constructor(title, description, bg_colour, bg_source) {
    this.title = title;
    this.description = description;
    this.bg_colour = bg_colour;
    this.bg_source = bg_source;
  }
}

class Tiles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.tiles);
    return (
      <Row xs={1} md={2} className="g-4 justify-content-center">
        {this.props.tiles.map((tile, idx) => (
          <Col key={tile.key} className="tile-card">
            <Card border={tile.border_colour} className="tile">
              <Card.Body>
                <Card.Title>{tile.header}</Card.Title>
                <Card.Text>
                  {tile.description}
                </Card.Text>
                <Tabs tabs={tile.tabs} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Tiles;
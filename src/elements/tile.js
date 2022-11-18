
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs'
import { deepOrange, deepPurple, red, teal } from '@mui/material/colors';

const redBase = red[500]
const redAccent = red['A400']

const purpleBase = deepPurple[500]
const purpleAccent = deepPurple['A400']

const tealBase = teal[500]
const tealAccent = teal['A400']

const orangeBase = deepOrange[500]
const orangeAccent = deepOrange['A400']

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
        {this.props.tiles.map((tile, idx) => {
          var thisBase = '';
          var thisAccent = '';
          switch (tile.border_colour) {
            case 'red':
              thisBase = redBase;
              thisAccent = redAccent;
              break;
            case 'teal':
              thisBase = tealBase;
              thisAccent = tealAccent;
              break;
            case 'purple':
              thisBase = purpleBase;
              thisAccent = purpleAccent;
              break;
            case 'orange':
              thisBase = orangeBase;
              thisAccent = orangeAccent;
              break;
          }
          return (
            <Col key={tile.key} className="tile-card">
              <Card border={tile.border_colour} className="tile">
                <Card.Body>
                  <Card.Title>{tile.header}</Card.Title>
                  <Card.Text className='tile-description'>
                    {tile.description}
                  </Card.Text>
                  <Tabs tabs={tile.tabs} />
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    );
  }
}

export default Tiles;
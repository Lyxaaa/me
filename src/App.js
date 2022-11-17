import logo from './logo.svg';
import * as Constants from './constants/constants';
import Tiles from './elements/tile';
import Header from './elements/header';

import './styles/App.css';
import './styles/header.css';

import { useState } from 'react';

// import data from './json/me.json'
let data = require('./json/me.json');


function App() {
  useState.apply(false)
  var title = {}
  var profile = {}

  return (
    <div>
      <Header me={data.title} />

      <div className="d-flex justify-content-center">

        <div className="tiles-container p-4">
          <Tiles tiles={data.tiles} />
        </div>
      </div>
    </div>
  );
}

export default App;

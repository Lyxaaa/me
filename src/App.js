import logo from './logo.svg';
import * as Constants from './constants/constants';
import Tiles from './elements/tile';
import './App.css';

// import data from './json/me.json'
let data = require('./json/me.json');


function App() {

  var title = {}
  var profile = {}

  return (
    <div class="body">
      <Tiles tiles={data.tiles} />
    </div>
  );
}

export default App;

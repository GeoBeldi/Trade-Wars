import './App.css';
import React, {useState} from 'react';
import axios, * as others from 'axios';

function App() {

  

const [coinData, setCoinData] = useState();

// Make a request for a user with a given ID
axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(function (response) {
    // handle success
    setCoinData(response);
    console.log(coinData);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

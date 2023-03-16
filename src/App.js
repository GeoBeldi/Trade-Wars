import './App.css';
import React, {useState, useEffect} from 'react';
import axios, * as others from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Wrapper from './components/wrapper/wrapper';

function App() {

const [namesArray, setNamesArray] = useState([]);
const [priceArray, setPriceArray] = useState([]);

// Get for Names
useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(function (response) {
    // handle success    
    for (let a = 0; a < response.data.length; a++) {
      setNamesArray(namesArray => [...namesArray, response.data[a].id]);
    }    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
},[]);

//Get for price
useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(function (response) {
    // handle success    
    for (let a = 0; a < response.data.length; a++) {
      setPriceArray(priceArray => [...priceArray, response.data[a].current_price]);
    }     
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
},[]);

  return (
    <div className="App col-12">
    <Wrapper >
     <Navbar/>
      <div className="main-title">
        <span >Bitcoin Prices</span>
      </div>
      <div className="table">
        <div className="names-div col-6">
            <span className="title">Name</span>
          {namesArray.slice(0, 10).map(name => 
            <span>{name}</span>
          )}
        </div>
        <div className="prices-div col-6">
          <span className="title">Price</span>
          {priceArray.slice(0, 10).map(price => 
            <span>{price}</span>
          )}
        </div>
        </Footer>
      </div>

    
  );
}

export default App;

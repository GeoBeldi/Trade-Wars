import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
import API  from './components/API/index'
import Wrapper from './components/wrapper/wrapper';
import Navbar from './components/navbar/navbar';


function App()  {
return (
     <Wrapper>
      <Navbar />
      <API />
      <Footer />
     </Wrapper>
)
}
export default App;

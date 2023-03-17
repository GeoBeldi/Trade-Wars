
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
// import Contact from './components/contact/contact';
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

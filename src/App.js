import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sliding from './components/Sliding';
import Contactbar from './components/Contactbar';
import ContactUsBlock from './components/ContactUsBlock';
import Cards from './components/Cards';
import Foot from './components/Foot';
import Register from './components/Register';
import Login from './components/Login';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  return (
    <>
      <Contactbar />
      <Navbar />
      <Sliding />
      <ContactUsBlock />
      <Cards />
      <Foot />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
     <Routes>

      <Route exact path="/ConsultWise" element={<Home />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/Login" element={<Login/>} />
     </Routes>
    </BrowserRouter>
  );
}


export default App;


import { NotFound } from 'http-errors';
import { Route, Routes } from 'react-router';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Service/Services/Services';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import Trainer from './Trainer/Trainer';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/trainer" element={<Trainer></Trainer>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/footer" element={<Footer></Footer>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

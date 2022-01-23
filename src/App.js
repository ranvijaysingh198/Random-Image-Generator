import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Product from './Views/Product';


function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      
    <div className='p-3'>
        <Routes>
            <Route exact path = "/" element ={<Home/>}>
                <Home/>  
            </Route>

            <Route path = "/about" element={<About/>}>
                <About/>
            </Route>

            <Route path = "/contact" element={<Contact/>}>
              <Contact/>
            </Route>

            <Route path = "/product/:id" element = {<Product/>}>
              <Product/>
            </Route>

        </Routes>
      </div>

      <Footer/>
      </Router>
    </div>
  );
}

export default App;



import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import Contact from './componets/Contact/Contact';
import Details from './componets/Details/Details';
import Home from './componets/Home/Home';
import Projects from './componets/Projects/Projects';
import Services from './componets/Services/Services';
import Footer from './componets/Shared/Footer/Footer';
import Header from './componets/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="details/:detailsId" element={<Details/>}></Route>
          <Route path="/project" element={<Projects/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

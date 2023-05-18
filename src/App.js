import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/blog" exact element={<Blog></Blog>}></Route>
          <Route path="/about" exact element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact" exact element={<Contact></Contact>}></Route>
          <Route path="/privacy" exact element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

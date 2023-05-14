import './App.scss';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Blog" element={<Blog></Blog>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
      <Button text="Subscribe"/>
      <Button text="Read more >"/>
    </div>
  );
}

export default App;

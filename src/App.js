import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/Blog" exact element={<Blog></Blog>}></Route>
          <Route path="/Contact" exact element={<Contact></Contact>}></Route>
        </Routes>

    </div>
  );
}

export default App;

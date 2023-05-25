import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BlogPost from './pages/BlogPost';

import { postsData } from './data/PostsData';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/blog' exact element={<Blog></Blog>}></Route>
          <Route path='/about' exact element={<AboutUs></AboutUs>}></Route>
          <Route path='/contact' exact element={<Contact></Contact>}></Route>
          <Route path='/privacy' exact element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          {/* <Route path='/BlogPost' exact element={<BlogPost></BlogPost>}></Route> */}

          <>
            { postsData.map((item, id) => {
              const linkTo = `/BlogPost${id}`;

              return (
                <Route key={id} path={linkTo} exact element={
                <BlogPost title={item.title} image={item.url} text={item.text} alt={item.alt}></BlogPost>}>

                </Route>
              )
            })}

          </>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

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

          <>
            { postsData.map((item, id) => {
              const linkTo = `/BlogPost/${id}`;

              return (
                <Route key={id} path={linkTo} exact element={
                  <BlogPost 
                  authorPhoto={item.authorPhoto}
                  author={item.author}
                  date={item.date}
                  title={item.title} 
                  tag={item.tag}
                  url={item.url} 
                  alt={item.alt}
                  subtitle1={item.subtitle1}
                  subtitle2={item.subtitle2}
                  subtitle3={item.subtitle3}
                  text={item.text}
                  text1={item.text1} 
                  text2={item.text2} 
                  text3={item.text3} 
                  text4={item.text4}
                  list1={item.list1}
                  list2={item.list2}
                  list3={item.list3}
                  linkTo={{linkTo}}
                  >
                  </BlogPost>}>
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
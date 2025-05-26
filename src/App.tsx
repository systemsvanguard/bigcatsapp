import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages 
import About from './pages/About';
import Contacts from './pages/Contacts';
import Resources from './pages/Resources';
import Home from './pages/Home';
import BigCatDetail from './pages/BigCatDetail';
// import shared components 
// import CatDetail from './components/CatDetail';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
// include the 404 error page last as fallback page, in routing far below
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/about"          element={<About />} />
        <Route path="/contacts"       element={<Contacts />} />
        <Route path="/resources"      element={<Resources />} />
        <Route path="/bigcats/:page"  element={<BigCatDetail />} />
        {/* <Route path="/details/:id" element={<CatDetail />} /> */}
        
        {/* add fallback 'Catch All' 404 Not Found route below here.  */}
        <Route path="*"               element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

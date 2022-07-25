import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home.js';

import Container from './layout/Container.js';
import NavBar from './layout/NavBar.js';
import Footer from './layout/Footer.js';


function App() {
  return (
    <Router>
      <NavBar />
        <Container customClass="min-height">
        <Routes>
            <Route exact path='/' element={ <Home />} />
            <Route  path='/home' element={ <Home />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

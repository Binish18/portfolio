import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experince from './components/experince/Experince';
import Services from './components/services/Services';
import { Porfolio } from './components/portfolio/Porfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <Header/>
     <Nav/>
     <About/>
     <Experince/>
     <Services/>
     <Porfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  
  );
}

export default App;

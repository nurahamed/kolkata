import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/sectionone/Section';
import SectionThree from './components/section/sectionthree/SectionThree';

import SectionTwo from './components/section/sectiontwo/SectionTwo';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Section/>
    <SectionTwo/>
    <SectionThree/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

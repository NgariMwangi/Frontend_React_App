
import './App.css';
import Navbar from './components/Navbar';
import InformationSection from './components/InformationSection';
import Testimonies from './components/Testimonies';
import Features from './components/Features';
import ChooseUs from './components/ChooseUs';
import Course from './components/Course';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <InformationSection/>
   <Features/>
   <ChooseUs/>
   <Course/>
   <Testimonies/>
  <Footer/>
    </div>
  );
}

export default App;

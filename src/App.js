
import './App.css';
import Navbar from './components/Navbar';
import InformationSection from './components/InformationSection';
import Testimonies from './components/Testimonies';
import Features from './components/Features';
import ChooseUs from './components/ChooseUs';
import Course from './components/Course';
import Footer from './components/Footer';
import {useState, useEffect} from 'react'
import Loader from './components/Loader';

function App() {
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)
},8000)
  },[])
  return (
    <div className="App">
      {loading? <Loader/>:
   <div><Navbar/>
   <InformationSection/>
   <Features/>
   <ChooseUs/>
   <Course/>
   <Testimonies/>
  <Footer/></div>}
    </div>
  );
}

export default App;

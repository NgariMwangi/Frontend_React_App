
import './App.css';
import Navbar from './components/Navbar';
import InformationSection from './components/InformationSection';
import Testimonies from './components/Testimonies';
import Features from './components/Features';
import ChooseUs from './components/ChooseUs';
import Course from './components/Course';
import Footer from './components/Footer';
import {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader";

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
      {loading? <ClipLoader
        color={"#FFCC00"}
        loading={loading}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:
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

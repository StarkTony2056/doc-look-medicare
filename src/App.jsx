// // Importing Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
// // Importing Material-UI components
import Button from '@mui/material/Button';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CategorySearch from './components/CategorySearch/CategorySearch';
import Infopage from './components/InfoPage/Infopage';
import DisplayDoctorList from './components/DoctorProfile/DisplayDoctorList';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import AnimatedCounter from './components/AnimatedCounter/AnimatedCounter';


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Infopage/>
      <CategorySearch/>
      <DisplayDoctorList/>
      <AnimatedCounter/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;

// // Importing Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
// // Importing Material-UI components
import Button from '@mui/material/Button';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CategorySearch from './components/CategorySearch/CategorySearch';
import Infopage from './components/InfoPage/Infopage';
import DisplayDoctorList from './components/DoctorProfile/DisplayDoctorList';


function App() {
  return (
    <div className='md:px-2'>
      <Header/>
      <Hero/>
      <Infopage/>
      <CategorySearch/>
      <DisplayDoctorList/>
    </div>
  );
}

export default App;

// // Importing Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
// // Importing Material-UI components
import Button from '@mui/material/Button';
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <div className='md:px-2'>
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;

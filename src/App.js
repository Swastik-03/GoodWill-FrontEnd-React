import './App.css';
import Navbar from './componets/navbar/Navbar';
import Carousel from './componets/home/carousel';
import Welcome_popular from './componets/home/welcome_popular';
import Help_need from './componets/home/help_need';
import Testinomials from './componets/home/testinomials';
import Mainfooter from './componets/footer/mainfooter';
import NGOPage from './componets/NGO/NGO_Page';
import Services from './componets/Services/Services'
import Contact from './componets/Contact/contact'
import GetUserNGO from './componets/NGO/GetUserNGO';
import NGODashboard from './componets/NGO/NGO_Dashboard';
// import MainDashboard from './componets/adminDashboard/MainDashboard'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div class="page-wrapper">
{/* <Carousel/>
<Welcome_popular/>
<Help_need/>
<Testinomials/> */}
{/* <Services /> */}
{/* <Contact /> */}
{/* <NGODashboard /> */}
{/* <GetUserNGO /> */}
{/* <MainDashboard /> */}
{/* <NGOPage /> */}
<Mainfooter/>
    </div>

    </div>
  );
}

export default App;

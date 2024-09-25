import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './website/main comp/Navbar.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer1 from './website/main comp/Footer1.jsx';
import Import_link from './website/main comp/Import_link.jsx';
import Our_teams from './website/about us/Our_teams.jsx';
import Our_vision from './website/about us/Our_vision.jsx';
import Carrer from './website/carres/Carrer.jsx';
import Head_office from './website/contact/Head_office.jsx';
import Savings from './website/deposits/Savings.jsx';
import Team_deposite from './website/deposits/Team_deposite.jsx';
import News from './website/gallery/News.jsx';
import Notice from './website/notice/Notice.jsx';
import Mobile_banking from './website/services/Mobile_banking.jsx';
import Money_transper from './website/services/Money_transper.jsx';
import About1 from './website/about us/About_home.jsx';
import Home1 from './website/home/Home.jsx';
import Personal_loan from './website/loans/Personal_loan.jsx';
import Vahical_loan from './website/loans/Vahical_loan.jsx';


function App() {
  return (
    <>
   
   <Router>
   
    
    <Navbar></Navbar>
    <Routes>
          <Route path='/' element={<Home1></Home1>}></Route>
          <Route path='/our_vision' element={ <Our_vision></Our_vision>}></Route>
          <Route path='/our_teams' element={<Our_teams></Our_teams>}></Route>
          <Route path='/saving' element={<Savings></Savings>}></Route>
          <Route path='/about_home' element={<About1></About1>}></Route>
          
          <Route path='/team_deposite' element={  <Team_deposite></Team_deposite>   }></Route>
          <Route path='/personal_loan' element={<Personal_loan></Personal_loan>}></Route>
          <Route path='/notice' element={    <Notice></Notice>}></Route>
          <Route path='/vahicle_lone' element={<Vahical_loan></Vahical_loan>}></Route>
          <Route path='/mobile_banking' element={<Mobile_banking></Mobile_banking>}></Route>
          <Route path='/head_office' element={    <Head_office></Head_office>}></Route>
          <Route path='/money_transfer' element={<Money_transper></Money_transper>}></Route>
          {/* <Route path='/https://samatawarta.in/' element={""}></Route> */}
          <Route path='/carrer' element={<Carrer></Carrer>}></Route>
          <Route path='/news' element={<News></News>}></Route>

    </Routes>
    <Import_link></Import_link>

    <Footer1></Footer1>
    
    
   </Router>

   

  
    </>
  );
}

export default App;

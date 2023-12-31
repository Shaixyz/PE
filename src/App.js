import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';
import Staff from './component/Staff';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './component/Detail';
import Add from './component/Add';
import Dashboard from './component/dashboard';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <Navigation/>
     
     <Routes>
     <Route path='/' element={<Staff/>}></Route> 
     <Route path='/add' element={<Add/>}></Route>
     <Route path='/dashboard' element={<Dashboard/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/detail/:id' element={<DetailPage/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

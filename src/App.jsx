import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/nav/header';
import Carousel from './pages/home/home';
import { Contact } from './components/contact/contact';
import Footer from './components/footer/footer';
import { Table } from '../src/pages/table/table';
import { Mazandaran } from './pages/table/city/mazandaran/mazandaran';
import { RegisterUser } from './components/form/register/register';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Carousel/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/table' element={<Table/>}/>
          <Route path='/table/mazandaran' element={<Mazandaran/>}/>
          <Route path='/register' element={<RegisterUser/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Nomatch from './pages/nomatch/Nomatch';
import PostUser from './pages/Employee/PostUser';
import UpdateUser from './pages/Employee/UpdateUser';
function App() {
  return (
    <>
  <Header/>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/employee' element={<PostUser/>}/>
    <Route path='/employee/:id' element={<UpdateUser/>}/>
    <Route path='*' element={<Nomatch/>}/>
  </Routes>
  </>
  );
}

export default App;


import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import AllBlogs from './pages/AllBlogs';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import MyBlogs from './pages/MyBlogs';
import CatagoryBar from './components/CatagoryBar';


function App() {
  return (
    <>
      <Header />
      <CatagoryBar />
      <Routes>
        <Route path='/' element={<AllBlogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/myblogs' element={<MyBlogs />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>


    </>
  );
}

export default App;

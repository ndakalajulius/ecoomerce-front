import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AdminProductScreen from './screens/AdminProductScreen'; // For admin to manage products

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          
          {/* Protect admin routes */}
          {userInfo && userInfo.isAdmin && (
            <Route path='/admin/products' element={<AdminProductScreen />} />
          )}
        </Routes>
      </main>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {
  Home,
  Error,
  Register,
  Login,
  Verify,
  Dashboard,
  ForgotPassword,
  ResetPassword,
} from './pages/Index';

import Navbar from './components/Navbar';
import { useGlobalContext } from './context';
function App() {
  const { user, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/dashboard' exact element={user ? <Dashboard /> : <Navigate to='/' />} />
        <Route path='/forgot-password' exact element={<ForgotPassword />} />
        <Route path='/user/verify-email' exact element={<Verify />} />
        <Route path='/user/reset-password' exact element={<ResetPassword />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router >
  );
}

export default App;
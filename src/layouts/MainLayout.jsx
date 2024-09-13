import { ToastContainer } from 'react-toastify';
import Navigation from '../components/Navigation/Navigation';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <Navigation />
        <Outlet />
        <ToastContainer position="fixed top-center"/>
    </>
  )
}

export default MainLayout
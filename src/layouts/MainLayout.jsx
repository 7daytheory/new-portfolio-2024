import { ToastContainer } from 'react-toastify';
import Navigation from '../components/Navigation/Navigation';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <Navigation />
        <Outlet />
        <ToastContainer position="top-center" className="fixed w-[100%] lg:w-[30%] center m-auto" />
    </>
  )
}

export default MainLayout
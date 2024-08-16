import apiLogo from '../../assets/api-logo.png'
import pdfLogo from '../../assets/pdf-logo.png'
import MyResume from '../../assets/resume.pdf'
import { Fade } from "react-awesome-reveal";

const Resume = () => {
    return (
    <div className="w-full p-4 text-center bg-white border border-white shadow sm:p-8 dark:bg-red-800 dark:border-gray-700">
        <Fade direction='top' duration={1000}><h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Would you like a copy of my Resume?</h5></Fade>
        <Fade direction='bottom' duration={2000}><p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-100">You can download a PDF version or you can request it via an API.</p></Fade>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Fade direction='left' cascade triggerOnce>
            <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <img 
                    src={apiLogo} 
                    alt="Api Logo" 
                    className="me-3" 
                    style={{ width: '100px', height: 'auto' }} 
                />
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Request my Resume</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">Via an API</div>
                </div>
            </a>
            <a href={MyResume} download="Lowe,Matthew Resume" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <img 
                    src={pdfLogo} 
                    alt="Pdf Logo" 
                    className="me-3" 
                    style={{ width: 'auto', height: '100px' }} 
                />
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Download my Resume</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">PDF Version</div>
                </div>
            </a>
            </Fade>
        </div>
    </div>
      );
    }

export default Resume
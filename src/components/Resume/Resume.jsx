import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import apiLogo from '../../assets/api-logo.png'
import pdfLogo from '../../assets/pdf-logo.png'
import MyResume from '../../assets/resumeWeb.pdf'
import { Fade } from "react-awesome-reveal";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import RequestKey from '../RequestKey/RequestKey';

    const Resume = () => {
        const wrapRef = useRef(null);
        const [wrapWidth, setWrapWidth] = useState(0);
        const [showRequestForm, setShowRequestForm] = useState(false);
    
        const updateDimensions = () => {
            if (wrapRef.current) {
                setWrapWidth(wrapRef.current.offsetWidth);
            }
        };
    
    useEffect(() => {
        const wrapElement = wrapRef.current;

        const resizeObserver = new ResizeObserver(() => {
            updateDimensions();
        });

        if (wrapElement) resizeObserver.observe(wrapElement);

        updateDimensions();
    }, []);

    const handleApiClick = (e) => {
        e.preventDefault();
        setShowRequestForm(!showRequestForm);
    };

    return (
    <div id="resume" className="relative w-full p-4 text-center bg-white border border-white shadow sm:p-8 dark:bg-red-800 dark:border-gray-700">
        <Fade duration={3500} triggerOnce>
            <div className="text-slate-800 text-[3em] absolute ml-[10%] top-[-22px] font-bold">RESUME <FontAwesomeIcon icon={faArrowDown} /></div>
        </Fade>
        <h2>** This Website/Portfolio is still in progress - just finishing off a few things and I do apologize if you get to my resume and check my website out before it's done. I will have it done within a day or two. **</h2>
        <Fade direction='top' duration={1000}>
            <h5 className="mb-2 mt-8 text-3xl font-bold text-gray-900 dark:text-white">Would you like a copy of my Resume?</h5>
        </Fade>
        <Fade direction='bottom' duration={2000}>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-100">You can download a PDF version or you can request an API key and get it with a request.</p>
        </Fade>
        <div className="m-auto items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mb-8">
            <div id="btnWidth" ref={wrapRef} className="md:inline-flex md:space-x-4">
            <Fade direction='left' cascade triggerOnce>
            <a onClick={handleApiClick} className="w-full inline mb-[25px] sm:w-auto cursor-pointer bg-slate-800 hover:bg-slate-700 space-x-4 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg shadow-[0px_0px_5px_0px_rgba(255,255,255,0.25)] inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <img 
                    src={apiLogo}
                    alt="Api Logo"
                    className="me-3"
                    style={{ width: '100px', height: 'auto'}} 
                />
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Request my Resume</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">Via an API</div>
                </div>
            </a>
            <a href={MyResume} id="pdfResume" download="Lowe,Matthew Resume" className="w-full inline sm:w-auto bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg shadow-[0px_0px_5px_0px_rgba(255,255,255,0.25)] inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
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
        {showRequestForm && (
                <RequestKey
                    wrapWidth={wrapWidth}
                    closeForm={() => setShowRequestForm(false)}
                />
            )}
    </div>
      );
    }

export default Resume
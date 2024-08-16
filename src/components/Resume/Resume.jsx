import apiLogo from '../../assets/api-logo.png'
import pdfLogo from '../../assets/pdf-logo.png'

const Resume = () => {
    return (
    <div class="w-full p-4 text-center bg-white border border-white shadow sm:p-8 dark:bg-red-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Would you like a copy of my Resume?</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-100">You can download a PDF version or you can request it via an API.</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <img 
                    src={apiLogo} 
                    alt="Api Logo" 
                    className="me-3" 
                    style={{ width: '100px', height: 'auto' }} 
                />
                <div class="text-left rtl:text-right">
                    <div class="mb-1 text-xs">Request my Resume</div>
                    <div class="-mt-1 font-sans text-sm font-semibold">Via an API</div>
                </div>
            </a>
            <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <img 
                    src={pdfLogo} 
                    alt="Pdf Logo" 
                    className="me-3" 
                    style={{ width: 'auto', height: '100px' }} 
                />
                <div class="text-left rtl:text-right">
                    <div class="mb-1 text-xs">Download my Resume</div>
                    <div class="-mt-1 font-sans text-sm font-semibold">PDF Version</div>
                </div>
            </a>
        </div>
    </div>
      );
    }

export default Resume
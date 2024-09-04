import React from 'react'

const Projects = () => {
  return (
    <>
        <div className="relative w-full p-4 text-center bg-white border border-white shadow sm:p-8 dark:bg-red-800 dark:border-gray-700">
        <Fade duration={3500} triggerOnce>
            <div className="text-slate-800 text-[3em] absolute ml-[10%] top-[-22px] font-bold">SOME PROJECTS <FontAwesomeIcon icon={faArrowDown} /></div>
        </Fade>
        </div>
    </>
  )
}

export default Projects
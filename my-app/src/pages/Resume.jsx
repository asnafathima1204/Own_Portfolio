import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ResumeImg from '../assets/asna_resume.jpg'
import {MdCloudDownload} from 'react-icons/md'

const Resume = () => {
  return (
    <>
        <Header/>
        <div className='px-6 md:px-20 py-32 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300-'>
            <div className="bg-white w-[100%] md:w-[75%] lg:w-[50%]  m-auto">
              <img src={ResumeImg} alt="" />
            </div>
            <div className="p-2 text-center m-auto">
              <a href='/resume.pdf'  target="_blank"
                rel="noopener noreferrer" download="asna_resume.pdf" className='bg-blue-400 rounded py-2 px-6 my-6 flex mx-auto w-max text-center text-xs md:text-sm font-semibold'><MdCloudDownload className='justify-center items-center my-auto mx-2' /> <p>Download Resume</p></a>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Resume
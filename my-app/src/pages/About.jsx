import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SiReact,SiHtml5,SiJavascript,SiDjango,SiTailwindcss } from "react-icons/si";
import { FaCss3,FaBootstrap,FaGitAlt,FaGithub,FaPython,FaFigma } from "react-icons/fa";

const About = () => {
  return (
    <>
        <Header/>
        <div className='bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 md:px-20 py-32 w-full'>
          <div className='w-full md:w-[60%] '>
            <h1 className=' font-bold text-lg md:text-3xl pb-2'>About <span className='text-blue-400'>me!</span></h1>
            <p className='text-base md:text-xl pb-2'>Hi, my name is <span className='text-blue-400'>Asna</span> and i am from Kasaragod, Kerala, India. Iam a <span className='text-blue-400'>Python Django full stack web developer</span>.</p>
            <p className='text-base md:text-xl' >I have done a comprehensive web development course and a professional internship as a <span className='text-blue-400'>Web developer</span>, where I worked on real-world projects to sharpen my skills. I’m passionate about building responsive, user-friendly web applications and I’m excited to grow as a professional developer by taking on challenging opportunities.</p>
          </div>
        </div>
        <div className='bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-20 py-32 w-full'>
          <h1 className='text-center font-bold text-lg sm:text-2xl md:text-4xl'>Professional Skill's</h1>
          <div className="items-center justify-center flex py-10 text-gray-900 dark:text-gray-300">
            <div className="skills place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 text-7xl justify-items-center flex flex-wrap justify-center mx-[5%]">
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110 ">
                  <SiHtml5 className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                  <FaCss3 className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                  <SiJavascript className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                  <FaBootstrap className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                   <FaGitAlt className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                  <FaGithub className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                  <FaPython className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                   <SiDjango className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                  <FaFigma className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                  <SiReact className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
                <div className="skill w-40 h-40 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-110">
                  <SiTailwindcss className="text-gray-800 dark:text-gray-100 text-6xl" />
                </div>
            </div>
          </div>
          
        </div>
        <Footer />
    </>
    
  )
}

export default About
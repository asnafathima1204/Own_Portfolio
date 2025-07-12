import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
        <Header/>
        <div className='bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-20 py-32 w-full'>
          <div className='w-[60%]'>
            <h1 className=' font-bold text-lg md:text-3xl pb-2'>About <span className='text-blue-400'>me!</span></h1>
            <p className='text-base md:text-xl pb-2'>Hi, my name is <span className='text-blue-400'>Asna</span> and i am from Kasaragod, Kerala, India. Iam a <span className='text-blue-400'>Python Django full stack web developer</span>.</p>
            <p className='text-base md:text-xl' >I have done a comprehensive web development course and a professional internship as a <span className='text-blue-400'>Web developer</span>, where I worked on real-world projects to sharpen my skills. I’m passionate about building responsive, user-friendly web applications and I’m excited to grow as a professional developer by taking on challenging opportunities.</p>
          </div>
        </div>
        <div className='bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-20 py-32 w-full'>
          <h1 className='text-center font-bold text-lg md:text-3xl'>Professional Skill's</h1>
        </div>
        <Footer />
    </>
    
  )
}

export default About
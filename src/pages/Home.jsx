import React from 'react'
import Header from '../components/Header'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Header/>
    <div className='py-32  px-12 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-50 h-full'>
        <h1 className='text-2xl md:text-5xl font-bold'>Hi!</h1>
        <h2 className='text-xl md:text-4xl font-bold'>I'm <span className='text-blue-400'>Fathima Asna,</span></h2>
        <h2 className='text-xl md:text-4xl font-bold'>A <span className='text-blue-400'>Python Django Full Stack Developer.</span></h2>
        <button className='bg-blue-400 text-gray-800 dark:text-gray-50 rounded my-6 px-6 py-2'><Link to="/about">Know more</Link></button>
    </div>
    <Footer />
    </>

  )
}

export default Home
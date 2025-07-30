import React from 'react'
import Header from '../components/Header'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Header/>
    <div className='py-34  px-6 md:px-20 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 h-full'>
        <h1 className='text-2xl md:text-5xl font-bold'>Hi!</h1>
        <h2 className='text-xl md:text-4xl font-bold'>I'm <span className='text-blue-400'>Fathima Asna,</span></h2>
        <h2 className='text-xl md:text-4xl font-bold'>A <span className='text-blue-400'>Python Django Full Stack Developer.</span></h2>
        
        <button className='bg-blue-400 text-gray-800 dark:text-gray-50 rounded my-6 px-6 py-2 hover:bg-blue-500 shadow hover:shadow-lg transition duration-75'><Link to="/about">Know more</Link></button>
    </div>

    <div className='pt-10 pb-40  px-6 md:px-20 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 h-full'>
      <h1 className='text-blue-400 font-bold text-xl md:text-3xl mb-4'>Introduction</h1>
      <p className="text-base md:text-xl dark:text-gray-300 mb-6 max-w-2xl">
        I love turning creative ideas into responsive web applications. As a Python Django Full Stack Developer, I build real-world projects that deliver meaningful impact.
      </p>
    </div>

    <div className='px-20 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 h-ful'>
      <div className='text-center'>
        <ul className='text-sm md:text-lg '>
          <li className='break-words hover:text-blue-400'><a className='flex items-center justify-center' href="mailto:asnafathima1204@gmail.com"><i class="fa-regular fa-envelope"></i> <span> Email:asnafathima1204@gmail.com</span></a></li>
          <li className='break-words hover:text-blue-400'><a className='flex items-center justify-center' href="tel:+918606066342"><i class="fa-solid fa-phone"></i> <span> Phone:+918606066342</span> </a></li>
        </ul>
      </div>
      <div className='py-4'> 
            <ul className='flex justify-center space-x-6 text-blue-400 text-base md:text-2xl '>
                <li className='hover:text-gray-800 dark:hover:text-gray-50'><a href="https://github.com/asnafathima1204" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li>
                <li className='hover:text-gray-800 dark:hover:text-gray-50'><a href="https://www.linkedin.com/in/fathimaasnas" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                <li className='hover:text-gray-800 dark:hover:text-gray-50'>
                  <a href="https://wa.me/918606066342" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
            </ul>
        </div> 
    </div>
    <Footer />
    </>

  )
}

export default Home
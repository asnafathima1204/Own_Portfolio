import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DingoImg from '../assets/dingo.png'
import BillingImg from '../assets/invoice_half.png'

const Project = () => {
  return (
    <>
        <Header/>
        <div className='px-4 md:px-20 py-32 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300'>
          <h1 className='text-center font-bold text-xl md:text-3xl pb-2'>My <span className='text-blue-400'>Project</span></h1>
          <div className='py-10 flex flex-wrap md:mx-[2%] gap-10 place-items-center justify-center justify-items-center'>
            <div className="w-[75%] md:w-[40%] h-130 md:h-140 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-105 ">
              <div className="p-4 w-full h-full">
                <div className="image w-full h-[40%]">
                  <img src={DingoImg} alt="Dingo Img" className='h-full'/>
                </div>
                <div className="description py-2 min-h-[50vh]">
                  <h2 className=' text-md md:text-2xl font-bold text-center py-2'>Restaurant Management</h2>
                  <h2 className='text-xs md:text-lg break-words whitespace-normal overflow-hidden'>A full-stack restaurant management web app with features like menu display, cart, customer orders, reservations, invoice generation,tracking systems and admin dashboard. It simulates a real restaurant workflow, built using HTML, CSS, JavaScript, and Bootstrap on the frontend, and Django with SQLite on the backend.</h2>
                </div>
                <div className="link flex items-center justify-center">
                  <ul className='flex'>
                    <li className='bg-blue-400 hover:text-gray-800 dark:hover:text-gray-50 button border px-4 mx-2 border-blue-400 rounded'><a href="https://github.com/asnafathima1204/DINGO" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li>
                    <li className='bg-blue-400 hover:text-gray-800 dark:hover:text-gray-50 button border px-4 mx-2 border-blue-400 rounded'><a href="https://dingo-n29j.onrender.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-eye"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[75%] md:w-[40%] h-130 md:h-140 rounded border-2 border-blue-400 justify-center items-center flex transform transition duration-500 hover:shadow-[0_2px_8px_0_theme('colors.blue.400')] hover:scale-105 ">
              <div className="p-4 w-full h-full">
                <div className="image w-full h-[40%]">
                  <img src={BillingImg} alt="Dingo Img" className='h-full w-[100%]'/>
                </div>
                <div className="description py-2 min-h-[50vh]">
                  <h2 className='text-md md:text-2xl font-bold text-center py-2'>Billing Application</h2>
                  <h2 className='text-xs md:text-lg break-words whitespace-normal overflow-hidden'>A full-stack billing application with features such as customer and product management, invoice generation with PDF download, partial and full payment handling, staff management, and stock tracking — built to function like a complete billing software. Developed using HTML, CSS, JavaScript, and Bootstrap on the frontend, and Django with SQLite on the backend.</h2>
                </div>
                <div className="link flex items-center justify-center">
                  <ul className='flex'>
                    <li className='bg-blue-400 hover:text-gray-800 dark:hover:text-gray-50 button border px-4 mx-2 border-blue-400 rounded'><a href="https://github.com/asnafathima1204/Billing_App" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li>
                    <li className='bg-blue-400 hover:text-gray-800 dark:hover:text-gray-50 button border px-4 mx-2 border-blue-400 rounded'><a href="https://billing.pythonanywhere.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-eye"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Project
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f3498bdf-a601-419b-a6d5-bb536c524384");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);


    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then(res => res.json());

      const isDarkMode =
        document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (res.success) {
        Swal.fire({
          title: "Done!",
          text: "Message sent successfully!",
          icon: "success",
          background: isDarkMode ? "#111827" : "#d1d5db", // gray-900 or gray-300
          color: isDarkMode ? "#d1d5db" : "#1f2937",       // text-gray-300 or text-gray-800
          customClass: {
            confirmButton: `
              bg-blue-400 
              ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} 
              hover:bg-blue-500 
              px-4 py-2 rounded
            `
          },
          buttonsStyling: false // so Tailwind styles apply
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error",
          text: res.message || "Something went wrong",
          icon: "error",
           background: isDarkMode ? "#111827" : "#d1d5db", // gray-900 or gray-300
          color: isDarkMode ? "#d1d5db" : "#1f2937",       // text-gray-300 or text-gray-800
          customClass: {
            confirmButton: `
              bg-blue-400 
              ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} 
              hover:bg-blue-500 
              px-4 py-2 rounded
            `
          },
          buttonsStyling: false // so Tailwind styles apply
        });
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      Swal.fire({
        title: "Network Error",
        text: "Please try again later.",
        icon: "error",
         background: isDarkMode ? "#111827" : "#d1d5db", // gray-900 or gray-300
          color: isDarkMode ? "#d1d5db" : "#1f2937",       // text-gray-300 or text-gray-800
          customClass: {
            confirmButton: `
              bg-blue-400 
              ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} 
              hover:bg-blue-500 
              px-4 py-2 rounded
            `
          },
          buttonsStyling: false // so Tailwind styles apply
      });
    }

  };
  return (
    <>
        <Header/>
        <div id="contact" className='py-10 px-20 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 h-ful'>
          <div className='w-[90%] sm:w-[75%] md:w-[50%] m-auto'>
            <h2 className='font-bold text-blue-400 text-lg md:text-2xl pb-2'>Contact Me!</h2>

            
            <div className='m-auto'>
              <form onSubmit={onSubmit}>
                <input className='focus:outline-none focus:ring-1 focus:ring-blue-400 rounded border-2 w-full p-2 placeholder:text-gray-800 placeholder:dark:text-gray-300 border-blue-400' type="text" id="name" name="name" placeholder='Enter your name' required autoComplete='off'/><br /><br />

                <input className='focus:outline-none focus:ring-1 focus:ring-blue-400 rounded border-2 w-full  p-2 placeholder:text-gray-800 placeholder:dark:text-gray-300 border-blue-400' type="email" id="email" name="email" placeholder='Enter your email' required autoComplete='off' /><br /><br />

                <textarea className='focus:outline-none focus:ring-1 focus:ring-blue-400 rounded border-2 w-full p-2 placeholder:text-gray-800 placeholder:dark:text-gray-300 border-blue-400' id="message" name="message" rows="6" placeholder='Enter your message' required autoComplete='off'></textarea><br /><br />

                <div className='text-center mx-auto'>
                    <button className='m-auto text-center cursor-pointer  text-gray-800 dark:text-gray-300 bg-blue-400 py-2 px-4 rounded justify-center' type="submit">Lets Connect</button>
                </div>
              </form>
            </div>
          </div>
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
        <Footer/>
    </>
  )
}

export default Contact
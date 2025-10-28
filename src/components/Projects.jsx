import React, { useEffect, useRef, useState } from 'react'
import ScreenshotOne from './image/Screenshot (31).png'
import ScreenshotTwo from './image/Screenshot (4).png'
import ScreenshotThree from './image/Screenshot (5).png'
import ScreenshotFour from './image/Screenshot (8).png'
import ScreenshotFive from './image/Screenshot (9).png'

const Projects = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if(!container) return;

    const scrollStep = 440;
    const intervalTime = 5000;

    const scrollSmoothly = () => {
      if (isPaused) return;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({left: 0, behavior: "smooth"});
      } else {
        container.scrollBy({left: scrollStep, behavior: "smooth"});
      }
    }

    const interval = setInterval(scrollSmoothly, intervalTime);
    return () => clearInterval(interval);

  }, [isPaused]);

  return (
    <div>
      <section ref={scrollRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}
        id='projects' className='mt-[80px] border-t-[1px] border-t-solid border-t-gray-200 mb-6 flex 
        flex-row justify-between items-center overflow-x-scroll p-2 shadow-md
      '>
        <div className='mb-6 ml-4 mt-[60px] flex-shrink-3 min-w-[400px] border-[1px] border-solid border-gray-200
         text-black font-semibold hover:opacity-80
          rounded-2xl shadow-md p-6
        '>
          <img 
            src={ScreenshotFive} 
            alt="" 
            className='rounded-lg'
          />
          <h1 className='text-2xl text-center mt-6'>
            Digital Bank
          </h1>

          <div className='justify-center flex flex-row items-center'>
            <a 
              href="https://github.com/Vf-projects/Digital-Bank"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[1px] border-solid border-gray-400 p-2 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer opacity-80
                active:translate-0 mt-4
              '>
                Github
              </button>
            </a>

            <a 
              href="https://digital-bank-chi.vercel.app/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[1px] border-solid border-gray-400 p-2 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer
                active:translate-0 ml-6 mt-4 opacity-80
              '>
                Live Demo
              </button>
            </a>
          </div>
        </div>
        
        <div className='mb-6 ml-4 mt-[60px] flex-shrink-3 min-w-[400px] border-[1px] border-solid border-gray-200
         text-black font-semibold hover:opacity-80
          rounded-2xl shadow-md p-6
        '>
          <img 
            src={ScreenshotTwo}
            alt="" 
            className='rounded-lg'
          />
          <h1 className='text-2xl text-center mt-6'>
            MOVIX APP
          </h1>

          <div className='justify-center flex flex-row items-center'>
            <a 
              href="https://github.com/Vf-projects/Movix"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[1px] border-solid border-gray-400 p-2 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer opacity-80
                active:translate-0 mt-4
              '>
                Github
              </button>
            </a>

            <a 
              href="https://movix-delta-teal.vercel.app/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[1px] border-solid border-gray-400 p-2 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer
                active:translate-0 ml-6 mt-4 opacity-80
              '>
                Live Demo
              </button>
            </a>
          </div>
        </div>
        
        <div className='mb-6 ml-4 mt-[60px] flex-shrink-3 min-w-[400px] border-[1px] border-solid border-gray-200
         text-black font-semibold hover:opacity-80
          rounded-2xl shadow-md p-6
        '>
          <img 
            src={ScreenshotThree}
            alt="" 
            className='rounded-lg'
          />
          <h1 className='text-2xl text-center mt-6'>
            MOVIX LOGIN PAGE
          </h1>

          <div className='justify-center flex flex-row items-center'>
            <a 
              href="https://github.com/Vf-projects/Movix-Dashboard/tree/main/LOGIN"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[1px] border-solid border-gray-400 p-2 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer opacity-80
                active:translate-0 mt-4
              '>
                Github
              </button>
            </a>

            <a 
              href="https://movix-login.vercel.app/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[1px] border-solid border-gray-400 p-2 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer
                active:translate-0 ml-6 mt-4 opacity-80
              '>
                Live Demo
              </button>
            </a>
          </div>
        </div>

        <div className='mb-6 ml-4 mt-[60px] flex-shrink-3 min-w-[400px] border-[1px] border-solid border-gray-200
         text-black font-semibold hover:opacity-80
          rounded-2xl shadow-md p-6
        '>
          <img 
            src={ScreenshotOne} 
            alt="" 
            className='rounded-lg'
          />
          <h1 className='text-2xl text-center mt-6'>
            Profile Card
          </h1>

          <div className='justify-center flex flex-row items-center'>
            <a 
              href="https://github.com/Vf-projects/Profile-Card"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[1px] border-solid border-gray-400 p-2 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer opacity-80
                active:translate-0 mt-4
              '>
                Github
              </button>
            </a>

            <a 
              href="https://profile-card-ebon.vercel.app/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[1px] border-solid border-gray-400 p-2 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer
                active:translate-0 ml-6 mt-4 opacity-80
              '>
                Live Demo
              </button>
            </a>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Projects
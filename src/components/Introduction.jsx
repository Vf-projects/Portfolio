import React from 'react'
import photo from './image/profilepic.jpg'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Introduction = () => {
  return (
    <div>
      <section className='mt-[35px] tablet:mt-[80px] max-h-[100vh] flex flex-col tablet:flex-row justify-between 
        items-center tablet:ml-[30px]'
      >
        <div className=''>
          <img 
            className='rounded-[50%] shadow-lg
              beforeTablet:w-[400px] beforeTablet:h-[350px]
              laptop:w-[500px] laptop:h-[450px]
              tablet:w-[300px] tablet:h-[250px] 
              xs:w-[300px] xs:h-[280px] xs:mb-[25px]
              6:mb-[25px]'
            src={photo}
            alt="" 
          />
        </div>

        <div 
          className='tablet:ml-3 text-center w-[350px] xs:w-[395px] beforeTablet:w-[700px] tablet:w-[380px]'
        >
          <p className='text-xl font-bold opacity-60 mb-3'>
            Hello, i'm
          </p>
          <h1 className='text-3xl font-bold opacity-80 mb-3'>
            VICTOR OMENIHU
          </h1>
          <p className='text-2xl font-bold opacity-60 mb-3'>
            Frontend Developer
          </p>

          <p className='mb-5'>
            I'm a frontend developer who enjoys building modern, responsive web apps with React and Javascript,
            always aiming for great design and performance.
          </p>

          <div>
            <a 
              href="/app/public/VF-projects CV.pdf"
              download="Omenihu_Victor_Frontend_Developer_CV.pdf"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='font-bold border-[2px] border-solid border-black p-3 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer
                active:translate-0
              '>
                Download CV
              </button>
            </a>
            
            <a 
              href="/VF-projects CV.pdf"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='ml-4 font-bold border-[2px] border-solid border-black p-3 rounded-4xl
                transition-all ease-in-out duration-500 hover:-translate-y-1.5 cursor-pointer
                active:translate-0
              '>
                View CV
              </button>
            </a>
            
            <a 
              href="https://wa.me/2349115683829?text=Hi%20Victor,%20I%20saw%20your%20portfolio!"
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='ml-4 font-bold bg-black text-white p-3 rounded-4xl
                border-[2px] border-solid border-black cursor-pointer
                transition-all ease-in-out duration-500 hover:-translate-y-1.5
                active:translate-0
              '>
                Message Me
              </button>
            </a>
          </div>

          <div className='mt-4 flex flex-row justify-center'>
            <a 
              className='text-3xl cursor-pointer
                transition-all ease-in-out duration-500 hover:-translate-y-1
                active:translate-0'
              href="https://www.linkedin.com/in/omenihu-victor-7ab935370/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
            
            <a 
              className='text-3xl ml-4 cursor-pointer
                transition-all ease-in-out duration-500 hover:-translate-y-1 active:translate-0'
              href="https://github.com/Vf-projects"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
            
            <a 
              className='text-3xl ml-4 cursor-pointer
                transition-all ease-in-out duration-500 hover:-translate-y-1 active:translate-0'
              href="https://www.instagram.com/vf___projects/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
            
            <a 
              className='text-3xl ml-4 cursor-pointer
                transition-all ease-in-out duration-500 hover:-translate-y-1 active:translate-0'
              href="https://x.com/VF__projects"
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Introduction
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b-[1px] border-b-solid border-b-gray-200 p-2'>
      <section className='flex flex-row justify-between items-center'>
        <h1 className='tablet:text-3xl text-3xl font-bold opacity-60'>
          VF_PROJECTS
        </h1>
        
        <ul className='hidden tablet:flex tablet:flex-row'>
          <li className='ml-8 text-lg opacity-70 hover:bg-black hover:text-white font-semibold hover:opacity-100
           hover:p-1 hover:rounded-lg transition-all ease-in-out cursor-pointer duration-500 p-1
          '>
            <a 
              href="#experience"
            >
              EXPERIENCE
            </a>
          </li>
          <li className='ml-8 text-lg opacity-70 hover:bg-black hover:text-white font-semibold hover:opacity-100
           hover:p-1 hover:rounded-lg transition-all ease-in-out cursor-pointer duration-500 p-1
          '>
            <a 
              href="#projects"
            >
              PROJECTS
            </a>
          </li>
          <li className='ml-8 text-lg opacity-70 hover:bg-black hover:text-white font-semibold hover:opacity-100
           hover:p-1 hover:rounded-lg transition-all ease-in-out cursor-pointer duration-500 p-1
          '>
            <a 
              href="#reviews"
            >
              REVIEWS
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Navbar
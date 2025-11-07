import React from 'react'
import Badge from './image/ribbon-badge.svg'
import Books from './image/images.svg'

const Experience = () => {
  return (
    <div>
      <section id='experience' className='mt-[230px] border-t-[1px] border-t-solid border-t-gray-200 mb-6
        beforeTablet:flex beforeTablet:flex-row justify-between items-center xs:mt-[80px]
      '>
        <div className='mt-[60px] beforeTablet:w-[50%] bg-gray-200 text-black 
          font-semibold rounded-2xl shadow-xl flex flex-row justify-center p-4
        '>
          <div className='flex flex-col text-center items-center'>
            <img 
              className='w-[70px] h-[70px] mb-4'
              src={Badge} 
              alt="" 
            />
            <h1 className='text-2xl font-bold mb-3'>
              Experience
            </h1>
            <p className='text-xl opacity-80 mb-2'>
              1+ Years
            </p>
            <ul className='text-xl opacity-60 mb-2 list-none text-left'>
              <li className='mb-2'>➕ HTML5</li>
              <li className='mb-2'>➕ CSS3</li>
              <li className='mb-2'>➕ Javascript</li>
              <li className='mb-2'>➕ React Js</li>
              <li className='mb-2'>➕ Responsiveness</li>
              <li className='mb-2'>➕ Form Validations</li>
              <li className='mb-2'>➕ Dealing with Endpoints and Api</li>
              <li className='mb-2'>➕ Creative Experience</li>
            </ul>
          </div>
        </div>
        
        <div className='mt-[60px] beforeTablet:ml-10 beforeTablet:w-[50%] bg-gray-200 text-black 
          font-semibold rounded-2xl shadow-xl flex flex-row justify-center p-4
        '>
          <div className='flex flex-col text-center items-center'>
            <img 
              className='w-[70px] h-[70px] mb-4'
              src={Books} 
              alt="" 
            />
            <h1 className='text-2xl font-bold mb-3'>
              Education
            </h1>
            <p className='text-xl opacity-80 mb-2'>
              ➕ Electrical Electronics Engineering
            </p>
            <p className='text-xl opacity-60 mb-2'>
              BEng Bachelor's Degree
            </p>
            <p className='text-xl opacity-80 mb-2'>
              ➕ Internship in Lloydant Business Services (2+ Years)
            </p>
            <p className='text-xl opacity-80 mb-2'>
              ➕ Operations Department
              <li className='opacity-60 font-semibold text-sm text-left ml-6'>Printing ID cards</li>
              <li className='opacity-60 font-semibold text-sm text-left ml-6'>Support Management</li>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
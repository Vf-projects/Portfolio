import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const Reviews = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isDisabled, setIsDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_4659ths',
      'template_g0o09io',
      formData,
      '2VB96DX68juYt-9PY'
    ).then(() => {
      setIsDisabled(true);
      alert('Feedback sent successfully!');
      setFormData({name: '', email: '', message: ''});
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>

      <section id='reviews' className='mt-[80px] border-t-[1px] border-t-solid border-t-gray-200 -mb-20 flex 
        flex-row justify-center bg-gray-200 p-2 rounded-lg shadow-lg -ml-20 -mr-20
      '>
        
        <form
          className='flex flex-col items-center mt-10' 
          onSubmit={sendEmail}
        >
          <input
            className='border-[3px] border-solid border-gray-400 w-[300px] rounded-lg h-[35px] p-2 mb-3 outline-none
             '
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name..."
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={isDisabled}
            required
          />
          <input
            className='border-[3px] border-solid border-gray-400 w-[300px] rounded-lg h-[35px] p-2 mb-3 outline-none
             '
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email..."
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={isDisabled}
            required
          />
          <textarea
            className='border-[3px] border-solid border-gray-400 w-[300px] rounded-lg h-[90px] p-2 mb-3 outline-none
             tablet:w-[500px]'
            name="message"
            value={formData.message}
            placeholder="Your Feedback..."
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isDisabled}
            required
          />
          <button 
            className='font-bold border-[2px] border-solid border-gray-400 p-3 rounded-4xl
              transition-all ease-in-out duration-500 hover:translate-y-1.5 cursor-pointer
              active:translate-0 mb-10'
            type="submit"
          >
            Send Feedback
          </button>
        </form>

      </section>

    </div>
  )
}

export default Reviews
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
           I'm just a poor programmer!!
          </p>
          <h1 className='py-4 text-gray-700'>
            Profile of <span className='text-[#e70fdc]'> Lethabo Mokgokoloshi</span>
          </h1>
          <h1 className='py-2 text-gray-700'> Software Engineer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Currently I am focused on building flutter mobile apps and learning a new language such as React and C#.
            Reason I want to be a Software Engineer at SovTech, I adapt easily to an environment, projects and
            I love to assist where possible. I smile a lot because I am always happy as my name symbolizes happiness. I love the way technology is changing each day so
            joining the SovTech team will be very interesting for me because having the same vison and working with 
            focused individuals that are solution orientated will be awesome. Getting projects done drives me way more 
            into motivation and growing within the company where the future is intellectual.
            
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/lethabo-mokgokoloshi-b0834ba5/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/LethaboMokg/softwareDev'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <img className='rounded-xl' src="/../assets/cube1.gif"
            width='950' 
            height='200'
            alt='' />
        </div>
      </div>
    </div>
  );
};

export default Main;

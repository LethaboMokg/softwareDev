import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/1.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4 text-[#e70fdc]'>The story behind Lethabo in Tech</h2>
          <p className='py-2 text-gray-600'>
            My name is Lethabo Mokgokoloshi, I am a graduate at the University
            of South Africa, I have obtained a Diploma in Information Technology 
            on the 29th October 2018. I am a bubbly, smile always, an introvet/Extrovet and 
            I enjoy assisting my peers. I am a passionate individual that is focused, willing
            to learn new languages and always pushing myself to be better each day.<br />

            Currently I am a student at Wethinkcode and I am studying Software Development and
            it is very fun to work with challenges, team work and interesting projects.
            Since it is my last year at Wethinkcode I have transitioned to be a Mobile Developer.
            I have developed an interest in technology at a young age as technology is always 
            expanding and elevates to new heist each day. I love being creative when working on
            on projects, I find technology very peculiar and it's always pushing one to 
            not be comfortable in their zone. 

          </p>
          <p className='py-2 text-gray-600'>
            Since I started at university with technology I have learned so much and
            still learning even today because education is never enough. My motto is "Each day
            learn something new". I have encountered interesting languages and frameworks such as:
            HTML5, CSS, Typescript, React, Next.js, Python, Java, Javascript, Javalin, MySQL, MongoDB,
            A+, N+ , PHP, Flutter, Dart, Eclipse and others. I wish to become a fullstack one day because 
            technology is amazing and you get to solve challenges each day even when you write tests to find bugs 
            that leads to breaking code, that's the fun part of being a developer.
          </p>
          
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <img className='rounded-xl' src="/../assets/1.jpg"
            width='950' 
            height='200'
            alt='' />
        </div>
      </div>
    </div>
  );
};

export default About;

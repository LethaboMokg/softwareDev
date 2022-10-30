import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'



const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Contact</p>
        <h2 className='py-4'>Let's Interact</h2>
        <div className='grid lg:grid-cols-5 gap-8' >

{/* left picture */}
<div className='col-span-3 lg:col-span-2 w=full shadow-xl shadow-gray-400 rounded-xl p-4'>
<div className='lg:p-4 h-full'>
<div>
    <img className='rounded-xl hover:scale=105 ease-in duration-300' 
     src="/../assets/code.png"
     alt="" />
    </div>
    <div>
        <h2 className='py-2'>Name</h2>
        <p>Software Engineer</p>
        <p className='py-4'>I am available to join the graduate program at SovTech in 2023.</p>
    </div>
    <div>
       <p className='uppercase pt-8'>Interact with Me</p> 
       <div className='flex items-center justify-between py-4'>
       <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration'>
                    <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration'>
                    <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration'>
                    <AiOutlineMail />
                </div>
       </div>
    </div>
</div>
</div>

{/* right picture */}
<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>

        <form>
            <div className='grid md:grid-cols-2 gap-4 py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text" 
                    />
       
                    <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="email" 
                    />

                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text" 
                    />

                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea> 
                
                </div>  
                </div>
                </div>
                </div>

            </div>
            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
        </form>

    </div>

</div>
    </div>
    <div className='flex justify-center py-12'>
        <Link href='/#contacts'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration'>
                <HiOutlineChevronDoubleUp className='text-[#cc29b6]'    size={25}/>
            </div>
        </Link>
    </div>
    </div>
    </div>
  )
}

export default Contact
"use client"
import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import deved from '../public/ajai.jpg'
import jsimg from '../public/Picture2.png'
import nodeimg from '../public/Picture3.png'
import reimg from '../public/Picture1.png'
import logo from '../public/ajai.png'
var scl10 = "https://srividyamandirapm.com/"
var scl12 = "https://srividyamandirapm.com/"
var clg = "https://ksrce.ac.in/"
import BlobAnimation from './BlobAnimation';
import React, { useState,useEffect } from "react";
import Logor from '../public/93.svg'
const certificate = ['https://th.bing.com/th/id/OIP.9aCIABIL1v6UlwbobzRSuwHaFP?pid=ImgDet&rs=1', 'https://i.pinimg.com/originals/15/e9/f0/15e9f0a0d72f202aa8171f12e2ce4fe4.jpg']
import ChatPopup from './ChatPopup';
import chatimg from '../public/speak.png'
export default function Home() {
  const [darkMood, setDarkmood] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className={darkMood ? "dark" : ""}>
      <main className='bg-white px-4 sm:px-8 md:px-10 lg:px-16 xl:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-2 mb-12 flex justify-between'>
            <Image src={logo} alt="error" width={150} />
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='text-2xl dark:text-white animate-pulse' onClick={() => setDarkmood(!darkMood)} /></li>
              <li><a href="resume" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 '>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center'>
            <h2 className='text-teal-600 text-5xl py-1 font-bold'>Ajai Narayanan</h2>
            <h3 className='text-2xl py-6 dark:text-white'>Developer and Designer.</h3>
            <p className='text-md text-gray-500 py-2'>Computer science student from K.S.R.College of Engineering</p>
            <p className='text-md text-gray-500 py-2'>Passionate about developing user-friendly software applications</p>
            <p className='text-md text-gray-500 py-2'>Excellent problem-solving skills and ability to perform well in a team</p>
          </div>
          <div className='text-5xl flex justify-center gap-8 py-2 text-gray-600 '>
            <a href="www.linkedin.com/in/ajai-narayanan-s-a8541a269"><AiFillLinkedin className='shadow-lg hover:text-teal-600' /></a>
            <a href="https://twitter.com/Ajaisagaa01"><AiFillTwitterCircle className='shadow-lg hover:text-teal-600' /></a>
            <a href="https://www.instagram.com/ajaisagaa/"><AiFillInstagram className='shadow-lg hover:text-teal-600' /></a>
          </div>
        <div className='w-[350px] h-[350px] absolute right-[550px] top-[410px]'>
        <BlobAnimation />
        </div>
          <div className='overflow-hidden relative mx-auto w-60 h-60 mt-10 border-solid border-2 border-sky-500 rounded-full'>
            <Image src={deved} alt="Ajai Narayanan" className="rounded-full shadow-xl hover:scale-105" layout="intrinsic" objectPosition="center center" />
          </div>
          
        </section>
          
        <section>
          <div className='text-center items-center flex flex-col py-10'>
            <h3 className='text-teal-600 text-3xl py-2 md:py-10 font-bold'>Tech-Skills</h3>
            <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-5'>
              <div className='w-64 md:w-60 lg:w-72 xl:w-80 h-48 md:h-44 lg:h-52 xl:h-52 grid justify-center shadow-xl rounded-md bg-white py-2 hover:text-white hover:bg-gradient-to-r from-cyan-300 to-teal-300'>
                <Image src={jsimg} alt='error' className='w-20 h-20 mx-auto' />
                <p className='text-2xl leading-3 font-bold'>Java Script</p>
              </div>
              <div className='w-64 md:w-60 lg:w-72 xl:w-80 h-48 md:h-44 lg:h-52 xl:h-52 grid justify-center shadow-xl rounded-md bg-white py-2 hover:text-white hover:bg-gradient-to-r from-cyan-300 to-teal-300'>
                <Image src={nodeimg} alt='error' className='w-20 h-20 mx-auto' />
                <p className='text-2xl leading-3 font-bold'>Node Js</p>
              </div>
              <div className='w-64 md:w-60 lg:w-72 xl:w-80 h-48 md:h-44 lg:h-52 xl:h-52 grid justify-center shadow-xl rounded-md bg-white py-2 hover:text-white hover:bg-gradient-to-r from-cyan-300 to-teal-300'>
                <Image src={reimg} alt='error' className='w-20 h-20 mx-auto' />
                <p className='text-2xl leading-3 font-bold'>React Js</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3">
          <div className='flex flex-col items-center justify-center '>
            <h3 className='text-teal-600 text-3xl py-6 md:py-10 font-bold'>Education</h3>
            <div className='w-full md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto'>
              <h1 className='group-date'>TIME-LINE</h1>
              <div className='timeline'>
                <div className='relative'>
                  <div className='dot'></div>
                  <div className='pl-10'>
                    <span className='timeline-date dark:text-white'>2018/8/23</span>
                    <h3 className='timeline-title dark:text-teal-600'>SRI VIDYA MANDIR - 10TH</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae dolorem placeat iste voluptas deleniti quas laudantium velit sapiente earum esse ad expedita, magnam doloribus vel repellendus ipsa. Sint, eveniet!</p>
                    <a href={scl10} className='text-teal-500 animate-pulse'>ReadMore..</a>
                  </div>
                </div>
                <div className='relative'>
                  <div className='dot'></div>
                  <div className='pl-10'>
                    <span className='timeline-date dark:text-white'>2018/8/23</span>
                    <h3 className='timeline-title dark:text-teal-600'>SRI VIDYA MANDIR - 12TH</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae dolorem placeat iste voluptas deleniti quas laudantium velit sapiente earum esse ad expedita, magnam doloribus vel repellendus ipsa. Sint, eveniet!</p>
                    <a href={scl12} className='text-teal-500 animate-pulse'>ReadMore..</a>
                  </div>
                </div>
                <div className='relative'>
                  <div className='dot animate-ping'></div>
                  <div className='pl-10'>
                    <span className='timeline-date dark:text-white'>2024/4/1</span>
                    <h3 className='timeline-title dark:text-teal-600'>K.S.R. COLLEGE OF ENGINEERING</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae dolorem placeat iste voluptas deleniti quas laudantium velit sapiente earum esse ad expedita, magnam doloribus vel repellendus ipsa. Sint, eveniet!</p>
                    <a href={clg} className='text-teal-500 animate-pulse'>ReadMore..</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className='text-center flex flex-col items-center'>
            <h3 className='text-teal-600 text-3xl py-4 md:py-10 font-bold'>Project</h3>
            <div className='grid gap-4 md:grid-cols-2 py-5'>
              <div className='w-full md:w-[350px] h-[200px] grid justify-center shadow-md rounded-md bg-white py-4 hover:shadow-xl'>
                <div className="flex float-left py-2">
                  <h4 className="text-xl leading-3 font-bold">📑  Student management</h4>
                </div>
                <div>
                  <p className="text-gray-500 py-4">🔥Lorem ipsum dolor sit amet consectetur adipisicing elit. ✌️Nisi ad repudiandae</p>
                </div>
                <div className="text-gray-400 flex gap-4 px-3">
                  <a>🟡 JavaScript</a>
                  <a>🔗 133</a>
                  <a>⭐ 777</a>
                  <a>43.MB</a>
                </div>
              </div>
              <div className='w-full md:w-[350px] h-[200px] grid justify-center shadow-md rounded-md bg-white py-4 hover:shadow-xl'>
                <div className="flex float-left py-2">
                  <h4 className="text-xl leading-3 font-bold">📑  Student management</h4>
                </div>
                <div>
                  <p className="text-gray-500 py-4">🔥Lorem ipsum dolor sit amet consectetur adipisicing elit. ✌️Nisi ad repudiandae</p>
                </div>
                <div className="text-gray-400 flex gap-4 px-3">
                  <a>🟡 JavaScript</a>
                  <a>🔗 133</a>
                  <a>⭐ 777</a>
                  <a>43.MB</a>
                </div>
              </div>
              <div className='w-full md:w-[350px] h-[200px] grid justify-center shadow-md rounded-md bg-white py-4 hover:shadow-xl'>
                <div className="flex float-left py-2">
                  <h4 className="text-xl leading-3 font-bold">📑  Student management</h4>
                </div>
                <div>
                  <p className="text-gray-500 py-4">🔥Lorem ipsum dolor sit amet consectetur adipisicing elit. ✌️Nisi ad repudiandae</p>
                </div>
                <div className="text-gray-400 flex gap-4 px-3">
                  <a>🟡 JavaScript</a>
                  <a>🔗 133</a>
                  <a>⭐ 777</a>
                  <a>43.MB</a>
                </div>
              </div>
              <div className='w-full md:w-[350px] h-[200px] grid justify-center shadow-md rounded-md bg-white py-4 hover:shadow-xl'>
                <div className="flex float-left py-2">
                  <h4 className="text-xl leading-3 font-bold">📑  Student management</h4>
                </div>
                <div>
                  <p className="text-gray-500 py-4">🔥Lorem ipsum dolor sit amet consectetur adipisicing elit. ✌️Nisi ad repudiandae</p>
                </div>
                <div className="text-gray-400 flex gap-4 px-3">
                  <a>🟡 JavaScript</a>
                  <a>🔗 133</a>
                  <a>⭐ 777</a>
                  <a>43.MB</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center flex flex-col items-center">
          <h3 className="text-teal-600 text-3xl py-4 md:py-10 font-bold">Achievements And Certifications</h3>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <div className="px-3 md:w-20 md:h-20 bg-gray-200 rounded-full" onClick={handleBack}></div>
            <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[800px] h-[300px] md:h-[400px] bg-gradient-to-r from-cyan-300 to-teal-300 shadow-md rounded-md flex items-center justify-center hover:shadow-xl">
              <img src={certificate[activeStep]} alt="" className="w-full md:w-[50%]" />
            </div>
            <div className="px-3 md:w-20 md:h-20 bg-gray-200 rounded-full" onClick={handleNext}></div>
          </div>
          <div className='bg-teal-600 w-[38px] h-[38px] fixed bottom-7 right-7 animate-ping rounded-full '>
          </div>
          <Image src={chatimg} alt="404"  className='fixed bottom-4 right-4 cursor-pointer 'onClick={openChat} width={60}/>
        </section>
        
        <ChatPopup isOpen={isChatOpen} onRequestClose={closeChat} />
      </main>
      
    </div>
  )
}

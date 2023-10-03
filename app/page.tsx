"use client"
import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import deved from '../public/ajai.jpg'
import jsimg from '../public/Picture2.png'
import nodeimg from '../public/Picture3.png'
import reimg from '../public/Picture1.png'
import { title } from 'process'
import { useState } from 'react'
import Project from './data.json'
var data: any[];
var scl10 = "https://srividyamandirapm.com/"
var scl12 = "https://srividyamandirapm.com/"
var clg = "https://ksrce.ac.in/"
export default function Home() {
  const [darkMood, setDarkmood] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  function project(name:string) {
    setIsVisible(!isVisible);
    if(name==='js'){
      data=Project['js']
    }else if(name==='node'){
      data=Project['node']
    }else{
      data=Project['react']
    }
    console.log(data)
  }
  return (
    <div className={darkMood ? "dark" : ""}>
      <head>
        <title>Ajai-portfolio</title>
        <meta name='description' content='gendral' />
      </head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-2 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Developed-by</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='text-2xl dark:text-white animate-pulse' onClick={() => setDarkmood(!darkMood)} /></li>
              <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 '>Resume</a></li>
            </ul>
          </nav>
          <div className=' text-center'>
            <h2 className='text-teal-600 text-5xl py-2 font-bold'>Ajai Narayanan</h2>
            <h3 className='text-2xl py-6 dark:text-white'>Developer and Designer.</h3>
            <p className='text-md  text-gray-500 py-2'>Computer science student from K.S.R.College of Engineering</p>
            <p className='text-md  text-gray-500 py-2'>passionate about developing user-friendly software applications</p>
            <p className='text-md  text-gray-500 py-2'>Excellent problem-solving skills and ability to perform well in a team</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-5 text-gray-600 '>
            <a href="www.linkedin.com/in/ajai-narayanan-s-a8541a269"><AiFillLinkedin className='shadow-lg hover:text-teal-600' /></a>
            <a href="https://twitter.com/Ajaisagaa01"><AiFillTwitterCircle className='shadow-lg hover:text-teal-600' /></a>
            <a href="https://www.instagram.com/ajaisagaa/"><AiFillInstagram className='shadow-lg hover:text-teal-600' /></a>
          </div>
          <div className=' overflow-hidden relative mx-auto w-60 h-60 mt-10 border-solid border-2 border-sky-500 rounded-full'>
            <Image src={deved} alt={''} className='rounded-full shadow-xl hover:scale-105 ' objectFit='cover' />
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-teal-600 text-3xl py-2 font-bold'>Tech-Skills</h3>
            <div className='flex justify-center gap-16 py-10 '>
              <div className='w-60 h-40 grid justify-center shadow-xl rounded-md my-10 bg-white py-2  hover:text-white hover:bg-gradient-to-r from-cyan-500 to-teal-500' onClick={() => project('js')}>
                <Image src={jsimg} alt='' className='w-20 h-20 mx-auto' />
                <p className='text-2xl leading-3 font-bold'>Java Script</p>
              </div>
              <div className='w-60 h-40 grid justify-center shadow-xl rounded-md my-10  bg-white py-2 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-teal-500 ' onClick={() => project('node')}>
                <Image src={nodeimg} alt='' className='w-20 h-20 mx-auto' />
                <p className='text-2xl leading-3 font-bold'>Node Js</p>
              </div>
              <div className='w-60 h-40 grid justify-center shadow-xl rounded-md my-10  bg-white py-2 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-teal-500' onClick={() => project('react')}>
                <Image src={reimg} alt='' className='w-20 h-20 mx-auto' />
                <p className='text-2xl leading-3 font-bold'>React Js</p>
              </div>
            </div>
           {isVisible && <div className='w-100 h-80 bg-teal-500 rounded-xl shadow-md'>
              <h1 className='group-date text-white'>PROJECT`S</h1>
              <div className='flex gap-5 justify-center items-center'>
                {data.map(data=>(
                  <div className='w-[25vw] h-40 bg-white rounded-md text-left px-5 py-2 shadow-md shadow-white hover:scale-[1.03]'>
                  <h1 className='font-bold'>Project</h1>
                  <p className='timeline-date'>{data.title}</p>
                  <p>{data.detail}</p>
                </div>
                ))}
              </div>
            </div>}
          </div>
        </section>
        <section>
          <div className='flex flex-col items-center justify-center '>
            <h3 className='text-teal-600 text-3xl py-10 font-bold'>Education</h3>
            <div className='w-[800px]'>
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
      </main>
    </div>
  )
}

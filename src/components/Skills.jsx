import React, { useEffect } from 'react'
import { AiFillHtml5, AiOutlineLine } from 'react-icons/ai'
import { DiCss3, DiJqueryLogo, DiNodejs, DiNpm, DiReact } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMaterialdesign, SiTailwindcss } from 'react-icons/si'
import { FaGit } from 'react-icons/fa'
import { MdOutlineDoneAll } from 'react-icons/md'
import bg from "../img/gif3.gif"
import { Icon } from '@iconify/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, [])
    return (

        <div className='mt-10' >
            <div className='mt-[350px] sm:mt-28 text-center ' >
                <div data-aos="zoom-in" >
                    <p className='text-base font-semibold tracking-[1px] uppercase  mb-3 inline-block ' ><i className=' inline-block relative top-[1.2rem] right-2 text-[50px]  text-[#70b812]  ' ><AiOutlineLine /></i>What I do</p>
                    <h2 className=' text-[30px] sm:text-5xl tracking-[-1px] font-bold sm:font-bold ' >Awesome Quality Skills</h2>
                </div>
            </div>
            <div className='h-screen w-screen lg:flex lg:mx-auto lg:px-20  '>

                <div className=' lg:flex h-full w-full ' >
                    <div className='block lg:hidden overflow-x-hidden '  >
                        <div data-aos="fade-left" >
                            <img src={bg} width="100%" height="100%" alt="" />
                        </div>
                    </div>
                    <div className=' h-full w-full lg:flex items-center px-2 lg:px-0 ' >
                        <div >
                            <p className="text-center py-2 uppercase  tracking-wide" data-aos="fade" >
                                Technologies and languages that I use to make my product
                                everyday
                            </p>
                            <div className='lg:flex justify-center ' >
                                <div>
                                    <div className='flex justify-center py-2' data-aos="flip-down"  >
                                        <div
                                            title="HTML5"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i
                                                title="HTML5"
                                                className=" bg-transparent text-[#e05025]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ..."
                                            >
                                                <AiFillHtml5 title="HTML5" />
                                            </i>
                                        </div>
                                        <div
                                            title="CSS3"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="CSS3" className=" bg-transparent text-[#254bdd]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <DiCss3 title="CSS3" />
                                            </i>
                                        </div>
                                        <div
                                            title="JavaScript"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="JavaScript" className=" bg-transparent text-[#efd81d]  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <IoLogoJavascript title="JavaScript" />
                                            </i>
                                        </div>
                                        <div
                                            title="ReactJS"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="ReactJS" className=" bg-transparent text-[#5ed3f3]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <DiReact title="ReactJS" />
                                            </i>
                                        </div>
                                        <div
                                            title="NodeJS"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="NodeJS" className=" bg-transparent text-[#6ca25d]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <DiNodejs title="NodeJS" />
                                            </i>
                                        </div>
                                    </div>
                                    <div className='flex justify-center py-2' data-aos="flip-down" >
                                        <div
                                            title="Node Package Manager"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16  w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="Node Package Manager" className=" bg-transparent text-[#c53635]  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <DiNpm title="Node Package Manager" />
                                            </i>
                                        </div>
                                        <div
                                            title="NextJS"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16  w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="NextJS" className=" bg-transparent text-black  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <TbBrandNextjs title="NextJS" />
                                            </i>
                                        </div>
                                        <div
                                            title="Tailwind CSS"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16  w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="Tailwind CSS" className=" bg-transparent text-[#36b7f0]  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <SiTailwindcss title="Tailwind CSS" />
                                            </i>
                                        </div>
                                        <div
                                            title="Material UI"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16  w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="Material UI" className=" bg-transparent text-[#007dc5]  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <SiMaterialdesign title="Material UI" />
                                            </i>
                                        </div>
                                    </div>
                                    <div className='flex justify-center py-2' data-aos="flip-down" >
                                        <div
                                            title="JQuery"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16  lg:h-24 lg:w-24"
                                        >
                                            <i title="JQuery" className=" bg-transparent text-[#007dc5]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <DiJqueryLogo title="JQuery" />
                                            </i>
                                        </div>
                                        <div
                                            title="GIT"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16  lg:h-24 lg:w-24"
                                        >
                                            <i title="GIT" className=" bg-transparent text-[#3d2d00]  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <FaGit title="GIT" />
                                            </i>
                                        </div>
                                        <div
                                            title="C++"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16  lg:h-24 lg:w-24"
                                        >
                                            <i title="C++" className=" bg-transparent text-[#00427e]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <Icon title="C++" icon="bxl:c-plus-plus" />
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex py-2 pt-4' data-aos="fade-right" >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500  text-3xl lg:text-3xl"  >
                                    <MdOutlineDoneAll />
                                </i>
                                <p>Building responsive website front end using ReactJS.</p>
                            </div>
                            <div className="flex py-2" data-aos="fade-right"  >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500 text-3xl lg:text-3xl">
                                    <MdOutlineDoneAll />
                                </i>
                                <p>Creating application backend in Node & Express.</p>
                            </div>
                            <div className="flex py-2" data-aos="fade-right"  >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500 text-3xl lg:text-3xl">
                                    <MdOutlineDoneAll />
                                </i>
                                <p>Proficient in JavaScript, HTML, and CSS.</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block overflow-x-hidden ' >
                        <div className=' h-full w-full flex items-center  ' data-aos="fade-left" >
                            <img src={bg} width="1000vw" height="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

import React, { useEffect } from 'react'
import {  AiOutlineLine } from 'react-icons/ai'
import { FaMeta } from "react-icons/fa6";
import { FaFacebook,FaInstagram, FaTiktok } from "react-icons/fa";
import { FaVideo } from 'react-icons/fa';
import { TiImage } from "react-icons/ti";
import { MdOutlineDoneAll } from 'react-icons/md'
import bg from "../img/cloud-bg-3.gif"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, [])
    return (

        <div className='mt-10' >
            <div className='mt-[200px] sm:mt-28 text-center ' >
                <div data-aos="zoom-in" >
                    <p className='text-base font-semibold tracking-[1px] uppercase  mb-3 inline-block ' ><i className=' inline-block relative top-[1.2rem] right-2 text-[50px]  text-[#70b812]  ' ><AiOutlineLine /></i>What I do</p>
                    <h2 className=' text-[30px] sm:text-5xl tracking-[-1px] font-bold sm:font-bold ' >Creative Digital Expertise</h2>
                </div>
            </div>
            <div className='h-screen w-screen lg:flex lg:mx-auto lg:px-20  '>

                <div className=' lg:flex h-full w-full  ' >
                    <div className='overflow-x-hidden flex items-center mt-7 sm:mt-0'  >
                        <div data-aos="fade-right" >
                            <img src={bg} width="1000vw" height="100%" alt="" />
                        </div>
                    </div>
                    <div className=' h-full w-full lg:flex items-center px-2 lg:px-0 ' >
                        <div >
                            <p className="text-center py-2 uppercase  tracking-wide" data-aos="fade" >
                            Technologies and Strategies Driving the Digital Powerhouse
                            </p>
                            <div className='lg:flex justify-center ' >
                                <div>
                                    <div className='flex justify-center py-2' data-aos="flip-down"  >
                                        <div
                                            title="Facebook"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i
                                                title="Facebook"
                                                className=" bg-transparent text-[#316FF6]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ..."
                                            >
                                                <FaFacebook title="Facebook" />
                                            </i>
                                        </div>
                                        <div
                                            title="Instagram"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="Instagram" className=" bg-transparent text-[#E4405F]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <FaInstagram className=''  title="Instagram" />
                                            </i>
                                        </div>
                                        <div
                                            title="Tiktok"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="Tiktok" className=" bg-transparent text-black  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <FaTiktok title="Tiktok" />
                                            </i>
                                        </div>
                                        <div
                                            title="Meta"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i className=" bg-transparent text-[#1877F2]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <FaMeta />
                                            </i>
                                        </div>

                                    </div>
                                    <div className='flex justify-center py-2' data-aos="flip-down" >
                                        <div
                                            title="Graphics & Logo Design"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i className=" bg-transparent text-[#FF5733]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <TiImage />
                                            </i>
                                        </div>
                                        <div
                                            title="Video Editing"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16  w-16 lg:h-24 lg:w-24"
                                        >
                                            <i className=" bg-transparent text-[#5ecf29]  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <FaVideo />
                                            </i>
                                        </div>
                                        {/* <div
                                            title="NextJS"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16  w-16 lg:h-24 lg:w-24"
                                        >
                                            <i className=" bg-transparent text-[#005e86]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <SiMysql />
                                            </i>
                                        </div> */}

                                    </div>

                                </div>
                            </div>
                            <div className='flex py-2 pt-4' data-aos="fade-right" >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500  text-3xl lg:text-3xl"  >
                                    <MdOutlineDoneAll />
                                </i>
                                <p>Social Media, Branding & Web Development Mastery.</p>
                            </div>
                            <div className="flex py-2" data-aos="fade-right"  >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500 text-3xl lg:text-3xl">
                                    <MdOutlineDoneAll />
                                </i>
                                <p>Complete Digital Presence & Creative Solutions.</p>
                            </div>
                            <div className="flex py-2" data-aos="fade-right"  >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500 text-3xl lg:text-3xl">
                                    <MdOutlineDoneAll />
                                </i>
                                <p>End-to-End Branding, Marketing & Development.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

import React, { useEffect } from 'react'
import "../styles/About.css"
import bg from "../img/ok7.gif"
import { AiOutlineLine } from "react-icons/ai"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {


    useEffect(() => {
        AOS.init({ duration: 800 });
    }, [])


    return (
        <div>
            <div className='h-screen w-screen  sm:flex sm:mx-auto lg:px-20 mt-10  z-10 ' >
                {/* <div className='flex' > */}
                <div className=' w-full flex items-center ' data-aos="fade-right" >
                    <div>
                        <img src={bg} width="1000vw" height="100%" alt="" />
                    </div>
                </div>
                <div className='h-full w-full sm:flex justify-center items-center p-3 ' >
                    <div className='' >

                        <div className='mb-8  ' >
                            <p className='text-base font-semibold tracking-[1px] uppercase  mb-3 inline-block ' ><i className=' inline-block relative top-[1.2rem] right-2 text-[50px]  text-[#70b812]  ' ><AiOutlineLine /></i>Learn About Me </p>
                            <h2 className=' text-[30px] sm:text-5xl tracking-[-1px] font-bold sm:font-bold ' >04 Years Experience</h2>
                        </div>
                        <div>
                            <p className='' >
                            Seasoned and independent Web Developer & Digital Marketer with 4 years of experience in blending design, development, and marketing to create impactful online experiences. Proficient in website development, social media marketing, lead generation, and 3D flyer & video creation. Passionate about crafting engaging UI/UX, optimizing features, and delivering high-performing digital solutions
                            </p>
                        </div>
                        <div>
                            <div className='mt-4' >
                                <p className='inline-block mb-1 text-base font-normal' >Website Development</p>
                                <p className='inline-block mb-1 text-base font-normal float-right ' >85%</p>
                            </div>
                            <div className='h-3 rounded-[10px] bg-[#dddddd] overflow-hidden ' >
                                {<div className='w-[85%] h-3 bg-[#70b812] rounded-full overflow-hidden ' data-aos="fade-right"  ></div>}
                                {/* { bar1 === false && <div className='bar1_end' ></div> }  */}
                            </div>
                            <div className='mt-4' >
                                <p className='inline-block mb-1 text-base font-normal' >3d Flyers & Videos Creation</p>
                                <p className='inline-block mb-1 text-base font-normal float-right' >95%</p>
                            </div>
                            <div className='h-3 rounded-[10px] bg-[#dddddd] overflow-hidden ' >
                                {<div className='w-[95%] h-3 bg-[#70b812] rounded-full overflow-hidden ' data-aos="fade-right"  ></div>}
                                {/* { bar1 === false && <div className='bar1_end' ></div> }  */}
                            </div>
                            <div className='mt-4' >
                                <p className='inline-block mb-1 text-base font-normal'  >Social Media Marketing</p>
                                <p className='inline-block mb-1 text-base font-normal float-right' >90%</p>
                            </div>
                            <div className='h-3 rounded-[10px] bg-[#dddddd] overflow-hidden ' >
                                {<div className='w-[90%] h-3 bg-[#70b812] rounded-full overflow-hidden ' data-aos="fade-right"  ></div>}
                                {/* { bar1 === false && <div className='bar1_end' ></div> }  */}
                            </div>
                            <div className='mt-4' >
                                <p className='inline-block mb-1 text-base font-normal'  >Leads Generations</p>
                                <p className='inline-block mb-1 text-base font-normal float-right' >85%</p>
                            </div>
                            <div className='h-3 rounded-[10px] bg-[#dddddd] overflow-hidden ' >
                                {<div className='w-[85%] h-3 bg-[#70b812] rounded-full overflow-hidden ' data-aos="fade-right"  ></div>}
                                {/* { bar1 === false && <div className='bar1_end' ></div> }  */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

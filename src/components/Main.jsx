import React, { useEffect, useRef } from 'react'
import "../styles/Main.css"
import bg from "../img/ok5.gif"
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import BottomTop from './BottomTop';




export default function Main() {


    useEffect(() => {
        AOS.init({ duration: 800 });
        window.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                // console.warn("scrolling up")


                if (ref.current.classList.contains("translate-y-0")) {
                    ref.current.classList.remove("translate-y-0")
                    ref.current.classList.add("-translate-y-[150px]")
                    hoe.current.classList.remove("h-16")
                    // hoe.current.classList.remove("sm:h-[70px]")



                }
            } else if (e.deltaY < 0) {
                // console.warn("scrolling down")

                if (ref.current.classList.contains("-translate-y-[150px]")) {
                    ref.current.classList.remove("-translate-y-[150px]")
                    ref.current.classList.add("translate-y-0")
                    hoe.current.classList.add("h-16")
                    // hoe.current.classList.add("sm:h-[70px]")
                }
            }
        })
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 200) {


                if (hoe.current.classList.contains("bg-transparent")) {
                    hoe.current.classList.remove("bg-transparent")
                    hoe.current.classList.add("bg-[#ffffff]")
                    suk.current.classList.remove("text-[#ffffff]")
                    suk.current.classList.add("text-[#70b812]")
                    shik1.current.classList.remove("text-[#fffcff]")
                    shik2.current.classList.remove("text-[#fffcff]")
                    shik3.current.classList.remove("text-[#fffcff]")
                    shik4.current.classList.remove("text-[#fffcff]")
                    shik5.current.classList.remove("text-[#fffcff]")
                    shik1.current.classList.add("text-[#70b812]")
                    shik2.current.classList.add("text-[#70b812]")
                    shik3.current.classList.add("text-[#70b812]")
                    shik4.current.classList.add("text-[#70b812]")
                    shik5.current.classList.add("text-[#70b812]")


                }


            } else {

                if (hoe.current.classList.contains("bg-[#ffffff]")) {
                    hoe.current.classList.remove("bg-[#ffffff]")
                    suk.current.classList.remove("bg-[#ffffff]")
                    hoe.current.classList.add("bg-transparent")
                    suk.current.classList.add("bg-transparent")
                    suk.current.classList.remove("text-[#70b812]")
                    suk.current.classList.add("text-[#ffffff]")
                    shik1.current.classList.remove("text-[#70b812]")
                    shik2.current.classList.remove("text-[#70b812]")
                    shik3.current.classList.remove("text-[#70b812]")
                    shik4.current.classList.remove("text-[#70b812]")
                    shik5.current.classList.remove("text-[#70b812]")
                    shik1.current.classList.add("text-[#fffcff]")
                    shik2.current.classList.add("text-[#fffcff]")
                    shik3.current.classList.add("text-[#fffcff]")
                    shik4.current.classList.add("text-[#fffcff]")
                    shik5.current.classList.add("text-[#fffcff]")
                    // foo.current.classList.remove("hover:text-[#ffffff]")
                    // foo.current.classList.add("hover:text-[#70b812]")
                }
            }
        })
    }, [])



    const ref = useRef()
    const suk = useRef()
    const hoe = useRef()
    const shik1 = useRef()
    const shik2 = useRef()
    const shik3 = useRef()
    const shik4 = useRef()
    const shik5 = useRef()

    return (
        <>
            <div className='absolute' >
                <i className='next  ' ><BottomTop /></i>
            </div>
            <div className='hero   '>
                <div className="  "  >
                    <div ref={hoe} className=' z-20 flex w-screen h-16  fixed top-0 items-center justify-center transition duration-1000 bg-transparent ' >

                        <div ref={ref} className=' w-4/5 flex justify-between items-center  mx-auto   fixed top-2 sm:top-0   transition duration-1000 translate-y-0 ' >


                            <div ref={suk} className="  text-4xl  sm:text-5xl text-[#ffffff]    hover:text-[#9bfd1a] " style={{ "fontFamily": "Ms Madi" }} >Saira Faisal</div>

                            <div className='flex' >
                                <a className='mr-1 sm:mr-2 transition duration-300 hover:scale-110' href="/"><i ref={shik1} className=' text-lg text-[#fffcff]  sm:text-2xl ' ></i></a>
                                <a rel="noreferrer" target='_blank' className='mr-1 sm:mr-2 transition duration-300 hover:scale-110' href="https://www.facebook.com/share/18GesHMsKh/?mibextid=wwXIfr"><i ref={shik2} className=' text-lg text-[#fffcff]  sm:text-2xl ' ><BsFacebook /></i></a>
                                <a  rel="noreferrer" target='_blank' className='mr-1 sm:mr-2 transition duration-300 hover:scale-110' href="https://www.instagram.com/saira_faisal_awm?igsh=dGF2eW83MjlibmE2"><i ref={shik3} className=' text-lg text-[#fffcff]  sm:text-2xl ' ><BsInstagram /></i></a>
                                <a className='mr-1 sm:mr-2 transition duration-300 hover:scale-110' href="/"><i ref={shik4} className=' text-lg text-[#fffcff]  sm:text-2xl ' ></i></a>
                                <a className='transition duration-300 hover:scale-110' href="/"><i ref={shik5} className=' text-lg text-[#fffcff]  sm:text-2xl ' ></i></a>

                            </div>

                        </div>



                    </div>
                </div>
                <div className=" h-screen w-screen sm:flex sm:mx-auto lg:px-20 z-10 ">

                    <div className='block sm:hidden' >
                        <div className='sm:h-full w-full flex items-center  ' >
                            <div data-aos="zoom-in" >
                                <img src={bg} width="100%" height="100%" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='sm:h-full w-full sm:flex items-center mt-10 md:mt-0 md:pl-12 lg:pl-0' >
                        <div className='flex flex-col items-center sm:block ' >
                            <div data-aos="fade-in" >
                                <p className='text-[#ffffff]  text-base sm:text-6xl font-semibold mb-2 sm:mb-6 ' data-aos="zoom-in" >I'm</p>
                                <h1 className='text-[#ffffff] text-3xl sm:text-6xl font-bold mb-2 sm:mb-6 ' data-aos="zoom-in" >Saira Faisal</h1>
                                <h2 className='inline-block m-0 h-4 sm:h-9 text-[#ffffff] text-lg sm:text-4xl font-semibold ' >
                                    <Typewriter
                                        options={{
                                            strings: ['Social Media Marketer', 'Poster Creater', "Video Creater", "Web Designer", "Website Developer"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>

                                <div className='mt-7 md:mt-14' data-aos="flip-down"  >
                                    <a target="_blank" rel="noreferrer" href="https://wa.me/+923223568113" className='mt-9 text-sm font-semibold sm:tracking-[1px] text-[#70b812] bg-[#ffffff] hover:text-[#ffffff] hover:bg-transparent py-2 sm:py-3 px-3 sm:px-6  border-[2px]  hover:border-[#ffffff]  mr-3 transition ease-in-out duration-[0.3s]' >Hire Me</a>
                                    <a target="_blank" rel="noreferrer" href="https://wa.me/+923223568113" className='mt-9 text-sm font-semibold sm:tracking-[1px] text-[#70b812] bg-[#ffffff] hover:text-[#ffffff] hover:bg-transparent py-2 sm:py-3 px-3 sm:px-6  border-[2px]  hover:border-[#ffffff]  mr-3 transition ease-in-out duration-[0.3s]' >Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block' >
                        <div className='h-full w-full flex items-center ' >
                            <div data-aos="fade-left" >
                                <img src={bg} width="1000vw" height="100%" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

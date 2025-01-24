import React, { useEffect, useState } from 'react'
import Img1 from "../img/portfolio-1.jpg"
import Img2 from "../img/portfolio-2.jpg"
import Img3 from "../img/dark-calculator.jpg"
import Img4 from "../img/light-calculater2.jpg"
import Img5 from "../img/snake.jpg"
import Img6 from "../img/tic-tac-toe.jpg"
import { BsBoxArrowUpRight } from "react-icons/bs";

import Aos from "aos"
import "aos/dist/aos.css"
import { AiOutlineLine } from 'react-icons/ai'

import All from "./all"


export default function Projects() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    const [first, setfirst] = useState("all")

    return (



        <div className="portfolio sm:mt-16 overflow-hidden " id="portfolio">
            <div className=" sm:px-20 w-4/5 sm:w-auto mx-auto ">
                <div data-aos="zoom-in" className="text-center mb-10 "  >
                    <p className='text-base font-semibold tracking-[1px] uppercase   mb-3 inline-block ' ><i className=' inline-block relative top-[1.2rem] right-2 text-[50px]  text-[#70b812]  ' ><AiOutlineLine /></i>My Projects</p>
                    <h2 className=' text-[30px] sm:text-5xl tracking-[-1px] font-bold sm:font-bold ' >My Excellent Projects</h2>
                </div>
                <div className="row" data-aos="flip-down"  >
                    <div className="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" onClick={() => { setfirst("all") }} className={first === "all" && "filter-active"}>All</li>
                            <li data-filter=".filter-1" onClick={() => { setfirst("filter-1") }} className={first === "filter-1" && "filter-active"} >Web Design</li>
                            <li data-filter=".filter-2" onClick={() => { setfirst("filter-2") }} className={first === "filter-2" && "filter-active"} >Mobile Apps</li>
                            <li data-filter=".filter-3" onClick={() => { setfirst("filter-3") }} className={first === "filter-3" && "filter-active"} >Game Dev</li>
                        </ul>
                    </div>
                </div>



                <div className='mt-6'  >
                    {first === "all" && <All />}
                    {first === "filter-1" && <div className="row portfolio-container" >
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 " data-wow-delay="0.0s" data-aos="fade-up-right" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={Img1} width="100%" height="100%" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>eCommerce Web</h3>
                                    <a className="btn  " href="https://codewear.herokuapp.com/">
                                        {/* <i className="fa-solid fa-up-right-from-square text-xl "></i> */}
                                        <BsBoxArrowUpRight className='text-2xl  ' />
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.2s" data-aos="fade-up" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={Img2} width="100%" height="100%" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Product Page</h3>
                                    <a className="btn" href="https://huntingcoders.herokuapp.com/">
                                        <i className="fa-solid fa-up-right-from-square"></i>
                                        <BsBoxArrowUpRight className='text-2xl  ' />
                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>}
                    {first === "filter-2" && <div className="row portfolio-container" >
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.4s" data-aos="fade-up-right" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={Img3} width="100%" height="100%" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Calculator App 1</h3>
                                    <a className="btn" href="https://syed-ahsan-naqvi.github.io/dark-light-calculator-app/">
                                        {/* <i className="fa-solid fa-up-right-from-square"></i> */}
                                        <BsBoxArrowUpRight className='text-2xl  ' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.4s" data-aos="fade-up" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={Img4} width="100%" height="100%" alt="" />
                                </div>
                                <div className="portfolio-text  ">
                                    <h3>Calculator App 2</h3>
                                    <a className="btn" href="https://syed-ahsan-naqvi.github.io/light-calculator/">
                                        {/* <i className="fa-solid fa-up-right-from-square"></i> */}
                                        <BsBoxArrowUpRight className='text-2xl  ' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>}
                    {first === "filter-3" && <div className="row portfolio-container" >
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.6s" data-aos="fade-up-right" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={Img5} width="100%" height="100%" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Snake Game</h3>
                                    <a className="btn" href="https://syed-ahsan-naqvi.github.io/snake-Game/">
                                        {/* <i className="fa-solid fa-up-right-from-square"></i> */}
                                        <BsBoxArrowUpRight className='text-2xl  ' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s" data-aos="fade-up" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={Img6} width="100%" height="100%" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Tic-Tac-Toe</h3>
                                    <a className="btn" href="https://syed-ahsan-naqvi.github.io/tic-tac-toe/">
                                        {/* <i className="fa-solid fa-up-right-from-square"></i> */}
                                        <BsBoxArrowUpRight className='text-2xl  ' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>}
                </div>
            </div>
        </div>

    )
}

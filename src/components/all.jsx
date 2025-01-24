import React, { useEffect } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Img1 from "../img/portfolio-1.jpg"
import Img2 from "../img/portfolio-2.jpg"
import Img3 from "../img/dark-calculator.jpg"
import Img4 from "../img/light-calculater2.jpg"
import Img5 from "../img/snake.jpg"
import Img6 from "../img/tic-tac-toe.jpg"

import Aos from "aos"
import "aos/dist/aos.css"
// import { AiOutlineLine } from 'react-icons/ai'


export default function All() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])
    return (
        <div>
            <div className="row portfolio-container" >
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 " data-aos="fade-right"  >
                    <div className="portfolio-wrap">
                        <div className="portfolio-img">
                            <img src={Img1} width="100%" height="100%" alt="" />
                        </div>
                        <div className="portfolio-text">
                            <h3>eCommerce Web</h3>
                            <a className="btn  " href="https://codewear.herokuapp.com/">
                                {/* <i className="fa-solid fa-up-right-from-square text-xl "></i> */}
                                <BsBoxArrowUpRight className='text-2xl' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 " data-aos="fade-up" >
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

                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 " data-aos="fade-left"   >
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
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 " data-aos="fade-right"  >
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
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 " data-aos="fade-up" >
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
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 " data-aos="fade-left"  >
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
            </div>
        </div>
    )
}

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { AiOutlineLine } from "react-icons/ai";


function Experience() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    return (

        <div className="  experience sm:mt-16 " id="education">
            <div className=" w-4/5 m-auto z-10 overflow-hidden ">
                <div data-aos="zoom-in" className="text-center mb-20 "  >
                    <p className='text-base font-semibold tracking-[1px] uppercase  mb-3 inline-block ' ><i className=' inline-block relative top-[1.2rem] right-2 text-[50px]  text-[#70b812]  ' ><AiOutlineLine /></i>My Resume</p>
                    <h2 className=' text-[30px] sm:text-5xl tracking-[-1px] font-bold sm:font-bold ' >Experience</h2>
                </div>
                <div className="timeline  ">
                    <div className="timeline-item left " data-aos="fade-right"  >
                        <div className="timeline-text">
                            <div className="timeline-date">2022 - continue</div>
                            <h2>MERN Stack</h2>
                            <h4>Stack Developer's, Canal Bank, Lahore</h4>
                            <p>
                                Full Stack eCommerce Apps <br /> with Blog Websites <br /> and many UI/UX designs
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right " data-aos="fade-left" >
                        <div className="timeline-text">
                            <div className="timeline-date">2021 - Continue</div>
                            <h2>Front-End</h2>
                            <h4>Generation Soft, Gulburg III, Lahore</h4>
                            <p>
                                Many project fixes, bug fixes & error handling <br /> learned NextJS, ReactJS <br /> clear basics of Javascript
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left " data-aos="fade-right"  >
                        <div className="timeline-text">
                            <div className="timeline-date">2021 - half</div>
                            <h2>Web Developer</h2>
                            <h4>Peak Solution, Saddar, Lahore</h4>
                            <p>
                                A Game website integrated with Api's <br /> and connected with MongoDB using NodeJS,<br />express frameworks
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Experience;

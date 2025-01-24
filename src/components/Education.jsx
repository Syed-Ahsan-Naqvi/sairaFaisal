import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { AiOutlineLine } from "react-icons/ai";


function Education() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    return (

        <div className="  experience mt-[100px] sm:mt-16  " id="education">
            <div className=" w-4/5 mx-auto z-10 overflow-hidden ">
                <div data-aos="zoom-in" className="text-center mb-20 "  >
                    <p className='text-base font-semibold tracking-[1px] uppercase  mb-3 inline-block ' ><i className=' inline-block relative top-[1.2rem] right-2 text-[50px]  text-[#70b812]  ' ><AiOutlineLine /></i>My Resume</p>
                    <h2 className=' text-[30px] sm:text-5xl tracking-[-1px] font-bold sm:font-bold ' >Education</h2>
                </div>
                <div className="timeline  ">
                    <div className="timeline-item left " data-aos="fade-right"  >
                        <div className="timeline-text">
                            <div className="timeline-date">2020 - continue</div>
                            <h2>BS Computer Science</h2>
                            <h4>NCBA&E University, Jallo, Lahore</h4>
                            <p>
                                Bachelor in Computer Sciences in National College of Business Administration & Economics
                            </p>
                            <p>
                                - Java
                            </p>
                            <p>
                                - MySql
                            </p>
                            <p>
                                - Artificial Intelligence (AI)
                            </p>
                            <p>
                                - Machine Learning
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right " data-aos="fade-left"  >
                        <div className="timeline-text">
                            <div className="timeline-date">2018 - 2020</div>
                            <h2>Intermediate in Computer Science</h2>
                            <h4>PGC, Muslim Town, Lahore</h4>
                            <p>
                                Intermediate in Computer Sciences in Punjab Group of Colleges
                            </p>
                            <p>
                                - Dev C++
                            </p>
                            <p>
                                - Computer Systems
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Education;

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { AiOutlineLine } from "react-icons/ai";


function Accomplishments() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    return (

        <div className="  experience sm:mt-16  " id="education">
            <div className=" w-4/5 m-auto z-10 overflow-hidden ">
                <div data-aos="zoom-in" className="text-center mb-20 "  >
                    <p className='text-base font-semibold tracking-[1px] uppercase   mb-3 inline-block ' ><i className=' inline-block relative top-[1.2rem] right-2 text-[50px]  text-[#70b812]  ' ><AiOutlineLine /></i>My Resume</p>
                    <h2 className=' text-[30px] sm:text-5xl tracking-[-1px] font-bold sm:font-bold ' >Accomplishments</h2>
                </div>
                <div className="timeline  ">
                    <div className="timeline-item left " data-aos="fade-right"  >
                        <div className="timeline-text">
                            <div className="timeline-date">Sep 16, 2022</div>
                            <h2>CSS & JavaScript</h2>
                            <h4>Udemy </h4>
                            <p>
                                An online non-credit course authorized by YouAccel Training, Blue Digital and offered
                                through Udemy Platform
                            </p>
                            <div className="hero-btn  mt-4 flex  justify-end"><a
                                href="https://www.udemy.com/certificate/UC-dab06b6c-5afe-47d5-ba7f-99c8569e8389/"
                                className="btn  ">Certificate</a>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item right " data-aos="fade-left" >
                        <div className="timeline-text">
                            <div className="timeline-date">Sep 14, 2022</div>
                            <h2>Javascript</h2>
                            <h4>UCDAVIS, California</h4>
                            <p>
                                An online non-credit course authorized by University of California, Davis and offered
                                through Coursera
                            </p>
                            <div className="hero-btn  mt-4 flex  justify-end"><a
                                href="https://www.coursera.org/account/accomplishments/verify/3PWUP63C3ZKD"
                                className="btn">Certificate</a>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item left " data-aos="fade-right"  >
                        <div className="timeline-text">
                            <div className="timeline-date">Sep 14, 2022</div>
                            <h2>Front-End Web UI Frameworks</h2>
                            <h4>HKUST, Hong Kong </h4>
                            <p>
                                An online non-credit course authorized by The Hong Kong University of Science and
                                Technology and offered through Coursera
                            </p>
                            <div className="hero-btn  mt-4 flex  justify-end"><a
                                href="https://www.coursera.org/account/accomplishments/verify/Z52DYY6EJNAU"
                                className="btn">Certificate</a>
                            </div>

                        </div>
                    </div>
                    <div className="timeline-item right " data-aos="fade-left" >
                        <div className="timeline-text">
                            <div className="timeline-date">Aug 29, 2022</div>
                            <h2>Web Developer</h2>
                            <h4>Johns Hopkins University, US</h4>
                            <p>
                                An online non-credit course authorized by Johns Hopkins University and offered through
                                Coursera.
                            </p>
                            <p>HTML, CSS, JavaScript</p>
                            <div className="hero-btn  mt-4 flex  justify-end"><a
                                href="https://www.coursera.org/account/accomplishments/verify/TGY6WSDZW7XK"
                                className="btn">Certificate</a>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item left " data-aos="fade-right"  >
                        <div className="timeline-text">
                            <div className="timeline-date">July 2, 2021</div>
                            <h2>Web Development</h2>
                            <h4>Peak Solution, Saddar, Lahore </h4>
                            <p>
                                An online non-credit course authorized by YouAccel Training, Blue Digital and offered
                                through Udemy Platform
                            </p>
                            <div className="hero-btn  mt-4 flex  justify-end"><a
                                href="/" className="btn">Certificate</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Accomplishments;

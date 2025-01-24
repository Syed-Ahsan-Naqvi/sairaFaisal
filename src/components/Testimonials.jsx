import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import { Carousel } from 'react-bootstrap'
import pic1 from "../img/team-1.jpg"
import pic2 from "../img/team-2.jpeg"
import pic3 from "../img/team-3.jpeg"
import pic4 from "../img/team-4.jpeg"

export default function Testimonials() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    return (
        <div className="h-screen flex items-center allfonts sm:mt-16 " style={{ "backgroundColor": "#70b812" }} data-aos="fade-up" >
            <Carousel className='w-screen sm:h-4/5 h-screen  overflow-hidden   ' style={{ "backgroundColor": "#70b812" }} pause={false} interval={3000}   >
                <Carousel.Item  >
                    <div class="testimonial  " data-wow-delay="0.1s" id="review"  >
                        < div class="container" >
                            <div class="testimonial-icon">
                                <i class="fa fa-quote-left"></i>
                            </div>
                            <div class="owl-carousel testimonials-carousel">
                                <div class="testimonial-item">
                                    <div class="testimonial-img">
                                        <img src={pic1} alt="" />
                                    </div>
                                    <div className="testimonial-text" >
                                        <p  >
                                        "I’ve been working with Saira Faisal for over a year now, and I can confidently say that the service provided is exceptional. The website development was fast, responsive, and user-friendly. They understood our vision and delivered beyond expectations."
                                        </p>
                                        <br />
                                        <h3>Ali Khan</h3>
                                        <h4>Non-exec Board Director</h4>
                                    </div>
                                </div>

                            </div>
                        </ div>
                    </div >
                </Carousel.Item >
                <Carousel.Item>
                    <div class="testimonial " data-wow-delay="0.1s" id="review">
                        <div class="container">
                            <div class="testimonial-icon">
                                <i class="fa fa-quote-left"></i>
                            </div>
                            <div class="owl-carousel testimonials-carousel">
                                <div class="testimonial-item">
                                    <div class="testimonial-img">
                                        <img src={pic2} alt="" />
                                    </div>
                                    <div class="testimonial-text">
                                        <p>
                                        "I had the pleasure of working with Saira Faisal on a web development project for my e-commerce store. Their attention to detail and ability to translate ideas into user-friendly designs was truly impressive. Highly recommend!"</p>
                                        <br />
                                        <h3>John Smith</h3>
                                        <h4>Founder & CEO, E-commerce Store - USA</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="testimonial " data-wow-delay="0.1s" id="review">
                        <div class="container">
                            <div class="testimonial-icon">
                                <i class="fa fa-quote-left"></i>
                            </div>
                            <div class="owl-carousel testimonials-carousel">
                                <div class="testimonial-item">
                                    <div class="testimonial-img">
                                        <img src={pic3} alt="" />
                                    </div>
                                    <div class="testimonial-text">
                                        <p>
                                        "I reached out to Saira Faisal for a social media marketing campaign for my boutique. The results were outstanding – from creating engaging posts to optimizing our ad strategies, they’ve helped elevate our brand in a highly competitive market."
                                        </p>
                                        <br />
                                        <h3>Marie Dubois</h3>
                                        <h4>Marketing Director, Boutique Brand - France</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="testimonial " data-wow-delay="0.1s" id="review">
                        <div class="container">
                            <div class="testimonial-icon">
                                <i class="fa fa-quote-left"></i>
                            </div>
                            <div class="owl-carousel testimonials-carousel">
                                <div class="testimonial-item">
                                    <div class="testimonial-img">
                                        <img src={pic4} alt="" />
                                    </div>
                                    <div class="testimonial-text">
                                        <p>
                                        "Working with Saira Faisal was an amazing experience. They developed a custom website for my business, taking into account all the unique requirements. Their communication was excellent throughout the project, and they were always quick to make adjustments."</p>
                                        <br />
                                        <h3>Carlos Fernandez</h3>
                                        <h4>Consulting Firm</h4>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel >
        </div >
    )
}

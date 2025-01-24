import React, { useEffect, useRef, useState } from 'react'
// import { set, useForm } from "react-hook-form";
import {  useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import gif1 from "../img/Invite(1).gif"
import Aos from "aos"
import "aos/dist/aos.css"
// import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])



    const schema = yup.object({
        name: yup.string().required("Username is Required").min(2, "Please enter atleast two Characters"),
        email: yup.string().required("Email is Required").email("Invalid Email Formate").min(2, "Please enter atleast two Characters"),
        subject: yup.string().required("Subject is Required").min(2, "Please enter atlease two Characters").max(40, "Subject exceed 40 Characters limit"),
        message: yup.string().required("Message is Required").min(2, "Please enter atleast two Characters").max(100, "Message exceed 100 Characters limit")

    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")
    // const [sent, setsent] = useState(false)


    const handleChange = (e) => {
        if (e.target.name === "name") {
            setname(e.target.value)
        } else if (e.target.name === "email") {
            setemail(e.target.value)
        } else if (e.target.name === "subject") {
            setsubject(e.target.value)
        } else if (e.target.name === "message") {
            setmessage(e.target.value)
        }
    }

    const form = useRef();


    const onSubmit = (data) => {

        // emailjs.sendForm("service_z66qko8", "template_mqqmnqq", form.current, "iiB2BRlci5q15ZIzg").then((result) => {
        //     console.warn(result.text)

        //     toast.success('Message sent Successfully', {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,

        //     });
        //     setname("")
        //     setemail("")
        //     setsubject("")
        //     setmessage("")
        // }, (error) => {
        //     console.warn(error.text)

        // },
       

        toast.success('Message sent Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        });
        setname("")
        setemail("")
        setsubject("")
        setmessage("")
        
    }


    return (


        <div className="about"   >
            <ToastContainer />
            <div className="container-fluid z-10 overflow-hidden ">
<br />
                <div className="row align-items-center">

                    <div className="col-lg-6" data-aos="fade-right" >
                        <form className='flex justify-center'  >
                            <img src={gif1} alt="" />
                        </form>
                    </div>
                    <div className="col-lg-6" data-aos="zoom-in" >
                        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="  sm:pl-14 pl-6 py-24 sm:pr-32 pr-14 " style={{ "backgroundColor": "#70b812" }}  >
                            <div className="mb-4" data-aos="fade-left" >

                                <input {...register("name")} required type="text" name='name' value={name} onChange={handleChange} style={{ "backgroundColor": "#70b812", "borderBottom": "1px solid white" }} className=" text-white  border-b-white  w-full py-2 pr-3 placeholder:text-white  leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
                                {errors?.name && <span className='text-white text-xs font-mono' >{errors?.name.message}</span>}
                            </div>
                            <div className="mb-4" data-aos="fade-left" >

                                <input {...register("email")} required type="email" name='email' value={email} onChange={handleChange} style={{ "backgroundColor": "#70b812", "borderBottom": "1px solid white" }} className=" text-white border-b-2 border-b-white  w-full py-2 pr-3 placeholder:text-white  leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
                                {errors?.email && <span className='text-white text-xs font-mono' >{errors?.email.message}</span>}
                            </div>
                            <div className="mb-4" data-aos="fade-left" >

                                <input {...register("subject")} required type="text" name='subject' value={subject} onChange={handleChange} style={{ "backgroundColor": "#70b812", "borderBottom": "1px solid white" }} className=" text-white border-b-2 border-b-white  w-full py-2 pr-3 placeholder:text-white  leading-tight focus:outline-none focus:shadow-outline" placeholder="Subject" />
                                {errors?.subject && <span className='text-white text-xs font-mono' >{errors?.subject.message}</span>}
                            </div>
                            <div className="mb-4" data-aos="fade-left" >

                                <textarea {...register("message")} required rows="4" type="text" name='message' value={message} onChange={handleChange} style={{ "backgroundColor": "#70b812", "borderBottom": "1px solid white" }} className=" text-white border-b-2 border-b-white resize-none w-full py-2 pr-3 placeholder:text-white  leading-tight focus:outline-none focus:shadow-outline" placeholder="Message" />
                                {errors?.message && <span className='text-white text-xs font-mono' >{errors?.message.message}</span>}
                            </div>

                            {/* <div className="mt-5 text-red-600 bg-gray-50 transition duration-500 border-2 inline-block py-2 px-3 font-semibold text-sm hover:text-white hover:border-white hover:bg-red-500"> */}
                            {/* <a href="" className='btn' >Send Message</a> */}
                            <div className='contact ' data-aos="fade-up"  >
                                <div className='contact-form ' >
                                    <button type='submit' className='btn  sm:-mt-2 -mt-10 '  >Send Message</button>
                                    {/* {sent === true && <span className='text-white text-xs font-mono' > <br /> Message sent successfully</span>} */}
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

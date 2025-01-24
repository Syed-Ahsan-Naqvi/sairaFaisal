import React, { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'

export default function BottomTop() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    return (
        <div  >
            <button onClick={() => { scrollToTop() }} className={isVisible === true ? "opacity-100 fixed w-12 h-12 z-20 flex justify-center items-center rounded-full bottom-6 right-6  sm:bottom-10  sm:right-20 bg-[#797979] hover:bg-gray-600 text-[#fff] " : "opacity-0"} ><BiArrowFromBottom className="h-6 w-6" aria-hidden="true" /></button>
        </div>
    )
}

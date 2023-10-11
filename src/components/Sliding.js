import React, { useState } from 'react'

export default function Sliding() {

    const [FadeAnimations, setFadeAnimations] = useState(false);
    const [SlideAnimations, setSlideAnimations] = useState(false);
    const [Fade, setFade] = useState(false);

    const jadu = () => {
        setFadeAnimations(true);
        setTimeout(()=>{
            setSlideAnimations(true);
            setFade(true);
        },600)
    }

    return (
        <>
            <div className='layer slider'>
                <div className="container mx-12 slides">
                    <div className="slider_content flex slide first">
                        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-[#FBBA42] absolute z-10 cursor-pointer translate-y-52 -translate-x-4" onClick={jadu}><i class="fa-solid fa-arrow-left text-[#002e5b]"></i></div>
                        <div className={FadeAnimations ? "flex flex-col ml-20 absolute z-20 fadeOut" : "flex flex-col ml-20 absolute z-20"}>
                            <div className={Fade?"opacity-0":""}>
                                <h1 className='text-5xl text-white font-black absolute z-10 my-24' style={{ width: "35rem" }}>Good advice change Your business growth</h1>
                                <p className='text-md text-white absolute z-10 my-52' style={{ width: "30rem" }}>We are a leading consultancy firm providing expert guidance and consultation services to individuals and businesses. Trust us for strategic planning, problem-solving, and achieving your goals. Contact us today for personalized advice and solutions.</p>
                                <button className='btn2 uppercase text-center text-sm mx-10 font-bold rounded-md tracking-wide mr-10 h-12 w-44  bg-yellow-400 text-slate-800 absolute z-10 hover:bg-white' style={{ transform: "translate(-40px)", margin: "22rem 2.5rem" }}>Read More</button>
                            </div>
                        </div>
                        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-[#FBBA42] absolute z-10 cursor-pointer translate-y-52 translate-x-[68rem]" onClick={jadu}><i class="fa-solid fa-arrow-right text-[#002e5b]"></i></div>
                    </div>

                    <div className={SlideAnimations ? "slider_content slide slideInRight absolute z-20" : "slider_content slide slideInRight hidden"}>
                        <div className="flex flex-col ml-20">
                            <h1 className='text-5xl text-white font-black absolute z-10 my-24' style={{ width: "30rem" }}>We help to grow your business</h1>
                            <p className='text-md text-white absolute z-10 my-52' style={{ width: "30rem" }}>We are a leading consultancy firm providing expert guidance and consultation services to individuals and businesses. Trust us for strategic planning, problem-solving, and achieving your goals. Contact us today for personalized advice and solutions.</p>
                            <button className='btn2 uppercase text-center text-sm mx-10 font-bold rounded-md tracking-wide mr-10 h-12 w-44  bg-yellow-400 text-slate-800 absolute z-10 hover:bg-white' style={{ transform: "translate(-40px)", margin: "22rem 2.5rem" }}>Read More</button>
                        </div>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className='h-[35rem] w-full' alt="Image" />
            </div>
        </>
    )
}


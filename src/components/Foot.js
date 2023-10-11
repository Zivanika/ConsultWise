import React from 'react'

export default function Foot() {
  return (
    <div className='h-[35rem] bg-[#002e5b] flex flex-col'>
        <div className="flex">
        <div className="container flex flex-col pt-28">
            <div className="flex"><i class="fa-solid fa-briefcase scale-150 cursor-pointer" style={{transform:"translate(34px,5px)",scale:"1.2",color:"#FBBA42"}}></i>
            <span className='font-bold text-xl tracking-widest text-white footer_gradient' style={{transform:"translate(50px)",fontFamily:"'Montserrat',sans-serif"}}><a href="/">ConsultWise</a></span></div>
            <p className='font-normal text-[#c6c4c4] w-[230px] translate-x-10 pt-3'>Far far away, behind the word mountains, far from the countries.</p>
        </div>
        <div className="container flex flex-col pt-28">
            <span className='font-bold text-xl tracking-widest text-[#FBBA42]' style={{transform:"translate(50px)",fontFamily:"'Montserrat',sans-serif"}}><a href="/">About Us</a></span>
            <ul className='text-[#c8c7c7]  pt-3 translate-x-12 space-y-6'>
                <li className='cursor-pointer hover:text-white'>About</li>
                <li className='cursor-pointer hover:text-white'>Privacy Policy</li>
                <li className='cursor-pointer hover:text-white'>Blog</li>
                <li className='cursor-pointer hover:text-white'>Terms & Conditions</li>
                <li className='cursor-pointer hover:text-white'>Success Stories</li>
            </ul>
        </div>
        <div className="container flex flex-col pt-28">
            <span className='font-bold text-xl tracking-widest text-[#FBBA42]' style={{transform:"translate(50px)",fontFamily:"'Montserrat',sans-serif"}}><a href="/">Support</a></span>
            <ul className='text-[#c8c7c7]  pt-3 translate-x-[3.2rem] space-y-6'>
                <li className='cursor-pointer hover:text-white'>FAQ</li>
                <li className='cursor-pointer hover:text-white'>Contribute</li>
                <li className='cursor-pointer hover:text-white'>Contact us</li>
            </ul>
        </div>
        <div className="container flex flex-col pt-28">
            <span className='font-bold text-xl tracking-widest text-[#FBBA42]' style={{fontFamily:"'Montserrat',sans-serif"}}><a href="/">Subscribe</a></span>
            <p className='leading-7 font-normal text-[#c8c7c7] w-[230px] pt-3'>Enter your email and get latest updates and offers</p>
            <input type="text" className='bg-transparent h-11 w-64 text-sm font-normal pl-4 mt-4 text-white border-none outline-none' placeholder='Your Email...' required style={{    background: "gba(0, 0, 0, 0) none repeat scroll 0 0",border: "1px solid #1c436a"}}/>
        </div>
        </div>
        <div className='border-t-[1px] border-slate-400 w-[70rem] ml-9 mt-28'></div>
        <p className='text-[#c8c7c7] pl-9 pt-6'>© 2023 <span> • </span> ConsultWise. All Rights Reserved.</p>
    </div>
  )
}

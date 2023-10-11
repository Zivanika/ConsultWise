import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <header className='sticky top-0 z-50 bg-white' style={{width:"101%"}}>
        <nav className='flex justify-center items-center'>
        <i class="fa-solid fa-briefcase scale-150 cursor-pointer" style={{transform:"translate(34px,-1px)",scale:"1.2",color:"#002e5b"}}></i>
                <span className='font-bold text-xl tracking-widest title_gradient' style={{transform:"translate(50px)",fontFamily:"'Montserrat',sans-serif"}}><a href="/">ConsultWise</a></span>
            <ul className=' font-semibold h-20 w-full flex justify-center items-center space-x-14'>
                <li className='nav-item font-sans text-lg text-slate-500 hover:text-blue-900 list'><a href="/">Home</a></li>
                <li className='nav-item font-sans text-lg text-slate-500 hover:text-blue-900 list'><a href="/">Career</a></li>
                <li className='nav-item font-sans text-lg text-slate-500 hover:text-blue-900 list'><a href="/">About</a></li>
                <li className='nav-item font-sans text-lg text-slate-500 hover:text-blue-900 list'><a href="/">Contact</a></li>
            </ul>
                <Link to="/Register"><button className='btn uppercase text-center text-sm font-bold rounded-md tracking-wide mr-10 h-12 w-48  bg-yellow-400 text-slate-800' style={{transform:"translate(-40px)"}}>Login / Register</button></Link>
        </nav>
        </header>
    </>
  )
}

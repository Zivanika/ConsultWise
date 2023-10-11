import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='body m-0  min-h-[100vh] font-["Montserrat",sans-serif'>
            <div className="background"></div>
            <div className="card main">
            <div className="logo flex"><i class="fa-solid fa-briefcase scale-[1.6] cursor-pointer" style={{transform:"translate(34px,5px)",scale:"1.2",color:"#FBBA42"}}></i>
                <span className='logo font-bold text-xl tracking-widest text-white -translate-y-10' style={{fontFamily:"'Montserrat',sans-serif"}}><Link to="/">ConsultWise</Link></span></div>
                {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}
                <div className="signup">
                    <h2 className='text-2xl -translate-y-8 text-[#2a3444] opacity-90'>Create Account</h2>
                    <form className='form' action="">
                        {/* <label htmlFor="chk" aria-hidden="true">Sign up</label> */}
                        <input type="text" placeholder='Name' required />
                        <input type="email" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                        <button type='submit' className='bg-yellow-400 text-slate-800'>SIGN UP</button>
                    </form>
                </div>
                <footer className='-translate-y-5 absolute bottom-0 left-20'>
                    Existing users, sign in
                    <Link to="/Login" className='underline ml-1'>here</Link>
                </footer>
            </div>
        </div>
    )
}

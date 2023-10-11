import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='body m-0  min-h-[100vh] font-["Montserrat",sans-serif'>
            <div className="background"></div>
            <div className="card main">
            <div className="logo flex"><i class="fa-solid fa-briefcase scale-[1.6] cursor-pointer" style={{transform:"translate(34px,5px)",scale:"1.2",color:"#FBBA42"}}></i>
                <span className='logo font-bold text-xl tracking-widest text-white -translate-y-10' style={{fontFamily:"'Montserrat',sans-serif"}}><Link to="/ConsultWise">ConsultWise</Link></span></div>
                {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}
                <div className="signup">
                    <h2 className='text-2xl -translate-y-8 text-[#2a3444] opacity-90 mb-2'>Welcome Back!</h2>
                    <form className='form' action="">
                        {/* <label htmlFor="chk" aria-hidden="true">Sign up</label> */}
                        <input type="email" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                        <button type='submit' className='bg-yellow-400 text-slate-800 absolute -bottom-6'>SIGN IN</button>
                    </form>
                </div>
                <footer className='-translate-y-5 absolute bottom-3'>
                    Don't have an account?, sign up
                    <Link to="/Register" className='underline ml-1'>here</Link>
                </footer>
            </div>
        </div>
    )
}

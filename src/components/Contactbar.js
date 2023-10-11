import React from 'react'

export default function Contactbar() {
    return (
        <>
            <nav className="h-12 bg-[#002e5b] flex gap-[42rem]" style={{ width: "101%" }}>
                <ul className="contact-info flex h-full items-center">
                    <li className="text-white w-24 ml-10 relative flex"><i class="fa-solid fa-phone mr-2 mt-1" style={{color:"#FBBA42"}}></i>8250202356</li>
                    <li className="text-white w-44 ml-16 relative flex"><i class="fa-solid fa-envelope mr-2 mt-1" style={{color:"#FBBA42"}}></i>harshitabarnwal2003@gmail.com</li>
                </ul>
                <ul className="social-info flex h-full items-center">
                    <li className="text-white w-12 relative flex"><a href="/"><i class="fa-brands fa-facebook-f mr-2 mt-1 transition-transform ease-in hover:scale-125"  style={{color:"#FBBA42"}}></i></a></li>
                    <li className="text-white w-12 relative flex"><a href="/"><i class="fa-brands fa-twitter mr-2 mt-1 transition-transform ease-in hover:scale-125"  style={{color:"#FBBA42"}}></i></a></li>
                    <li className="text-white w-12 relative flex"><a href="/"><i class="fa-brands fa-instagram mr-2 mt-1 transition-transform ease-in hover:scale-125"  style={{color:"#FBBA42"}}></i></a></li>
                </ul>
            </nav>
        </>
    )
}

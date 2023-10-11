import React from 'react'

export default function Cards() {
  return (
    <div className='h-[35rem] bg-[#f6f6f6] flex flex-col gap-10 items-center justify-center'>
        <div className="container flex flex-col justify-center items-center gap-10">
        <h1 className='text-5xl text-[#002e5b] font-black'>We Provide the Best Services</h1>
        <p className='text-sm font-normal -translate-y-4 text-[#777777] w-[780px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, neque ab deserunt, veniam nemo enim, hic dicta perferendis natus vitae tenetur. Facilis amet animi blanditiis molestias, mollitia maxime quibusdam laborum.</p>
        </div>
        <div className="container grid grid-cols-3 gap-10">
            <div className="bg-white duration-300 text-center mb-30 h-80 w-80 p-10 flex flex-col items-center justify-center duration-300 hover:shadow-xl">
            <i class="fa-solid fa-magnifying-glass-chart text-[#002e5b] pr-0.5 scale-[4] cursor-pointer hover:text-[#FBBA42]"></i>
                <h4 className='text-lg font-bold text-[#002e5b] mt-14 cursor-pointer hover:text-[#FBBA42]'>Market Analysis</h4>
                <p className='text-sm font-normal translate-y-4 text-[#777777]'>Lorem ipsum dolort.  esse sunt cupiditats voluptatibus enim ad sed laboriosam dolore odit!</p>
            </div>
            <div className="bg-white duration-300 text-center mb-30 h-80 w-80 p-10 flex flex-col items-center justify-center duration-300 hover:shadow-xl">
            <span class="material-symbols-outlined text-[#002e5b] pr-0.5 scale-[3] cursor-pointer hover:text-[#FBBA42]">point_of_sale</span>
                <h4 className='text-lg font-bold text-[#002e5b] mt-14 hover:text-[#FBBA42] cursor-pointer'>Improve Sales Services</h4>
                <p className='text-sm font-normal translate-y-4 text-[#777777]'>Lorem ipsum dolort.  esse sunt cupiditats voluptatibus enim ad sed laboriosam dolore odit!</p>
            </div>
            <div className="bg-white duration-300 text-center mb-30 h-80 w-80 p-10 flex flex-col items-center justify-center duration-300 hover:shadow-xl">
            <i class="fa-solid fa-business-time text-[#002e5b] pr-0.5 scale-[3.5] cursor-pointer hover:text-[#FBBA42]"></i>
                <h4 className='text-lg font-bold text-[#002e5b] mt-14 hover:text-[#FBBA42] cursor-pointer'>Business Planning</h4>
                <p className='text-sm font-normal translate-y-4 text-[#777777]'>Lorem ipsum dolort.  esse sunt cupiditats voluptatibus enim ad sed laboriosam dolore odit!</p>
            </div>
        </div>

    </div>
  )
}

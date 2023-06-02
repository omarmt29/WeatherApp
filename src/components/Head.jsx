import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Head({ setData }) {

  

   

   

    return (
        <div className='grid gap-5 sm:gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-4  border-bottom-color pb-4 mb-6 sm:pb-10 sm:mb-10 md:pb-16 md:mb-16'>

            <div className='justify-center sm:justify-center order-1 sm:order-3 flex sm:col-span-1 w-full'>
                <div className=''>
                    <p className=' bg-[#0000003b]  inline px-5 py-2 font-medium  rounded-3xl text-white'>08/2/2023 - 10:55</p>

                </div>
            </div>

            <div className='flex justify-center  flex-col  sm:col-span-2 order-3 sm:order-2'>
                <p className='text-center text-white font-medium text-xl  sm:text-lg md:text-2xl '>Santo Domingo - Distrito Nacional</p>
                <p className='text-center text-white text-xl font-thin mt-2'>asdad</p>
            </div>
            <button>enviar</button>
            

            <div className='flex justify-center sm:justify-end w-full sm:w-full sm:col-span-1 order-none sm:order-'>
                <div className='relative mb-5 sm:m-0 w-full sm:w-full '>
                    <svg className='w-6 h-auto absolute top-2 left-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <input type="text" className=' rounded-3xl w-full sm:w-full  text-white  py-2 pl-10  bg-[#0000003b] placeholder:text-slate-300' placeholder='Search' />
                </div>
            </div>

        </div>

    )
}

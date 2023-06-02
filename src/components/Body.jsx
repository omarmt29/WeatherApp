import React from 'react'

export const Body = ({info}) => {
    return (
        <div className='grid gap-5 sm:gap-5 grid-cols-1   xl:grid-cols-2 2xl:grid-cols-2 border-bottom-color pb-12'>

            <div className='flex items-center  justify-start  xl:justify-center flex-col  border-none  xl:border-right-color '>


                <div className='flex items-center sm:flex-row   xl:justify-center  gap-3 sm:gap-10 '>
                    <img className=' w-[130px] h-auto xl:w-[150px] 2xl:w-[200px]' src="/cloud-sun.png" alt="" />
                    <p className='text-[90px] xl:text-[100px] 2xl:text-[180px]  text-white font-semibold cloud-number'>{info.current ? info.current.cloud  : ''}</p>
                </div>


                <div className='flex gap-3 sm:gap-6 mt-7 sm:mt-8'>
                    <p className='text-white font-thin text-xl sm:text-4xl'>{info.current ? info.current.condition.text  : ''}</p>
                    <p className='text-white font-thin text-xl sm:text-4xl'>{info.current ? info.current.temp_f  : ''} F</p>
                    <p className='text-white font-thin text-xl sm:text-4xl'>{info.current ? info.current.temp_c  : ''} C</p>
           
                </div>
            </div>
           

            <div className='gap-5 sm:mt-5 md:mt-0 pl-0 items-center sm:items-center md:items-center xl:pl-14  xl:justify-center  flex flex-col'>
                <div className='flex flex-col gap-3 sm:gap-6'>
                    <div className='flex justify-start xl:justify-start  gap-5 sm:gap-12'>
                        <div>
                            <p className='text-white text-xl sm:text-2xl'>Wind mph</p>
                            <p className='text-slate-200 font-thin text-xl sm:text-2xl'>{info.current ? info.current.wind_mph  : ''}</p>
                        </div>
                        <div>
                            <p className='text-white text-xl sm:text-2xl'>Wind kph</p>
                            <p className=' text-slate-200 font-thin text-xl sm:text-2xl'>{info.current ? info.current.wind_kph  : ''}</p>
                        </div>
                        <div>
                            <p className='text-white text-xl sm:text-2xl'>Humidity</p>
                            <p className=' text-slate-200 font-thin text-xl sm:text-2xl'>{info.current ? info.current.humidity  : ''}%</p>
                        </div>
                    </div>
                    <div className=' flex justify-start xl:justify-start gap-5 sm:gap-12'>


                        <div>
                            <p className='text-white text-xl sm:text-2xl'>Gust mph</p>
                            <p className=' text-slate-200 font-thin text-xl sm:text-2xl'>{info.current ? info.current.gust_mph  : ''}</p>
                        </div>

                        <div>
                            <p className='text-white text-xl sm:text-2xl'>Gust kph</p>
                            <p className=' text-slate-200 font-thin text-xl sm:text-2xl'>{info.current ? info.current.gust_kph  : ''}</p>
                        </div>
                        <div>
                            <p className='text-white text-xl sm:text-2xl'>Cloud</p>
                            <p className='text-slate-200 font-thin text-xl sm:text-2xl'>{info.current ? info.current.cloud  : ''}%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

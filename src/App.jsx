import { useState, useEffect } from 'react'
import './App.css'
import { Body } from './components/Body'
import axios from 'axios'

function App() {

  const [info, setInfo] = useState({})
  const [search, setSearch] = useState('Republica dominicana')

  useEffect(() => {
    const handleClick = async () => {


      const options = {
        method: 'GET',
        url: 'https://api.weatherapi.com/v1/current.json',
        params: { key: '3b4e2098abb14d94936222407223105', q: search , aqi: 'yes' }
      };

      await axios.request(options).then(function (response) {
        console.log(response.data);
        setInfo(response.data);

      }).catch(function (error) {
        console.error(error);
      });


    };

    handleClick()
  }, [])


  const searchData = async () => {


    const options = {
      method: 'GET',
      url: 'https://api.weatherapi.com/v1/current.json',
      params: { key: '3b4e2098abb14d94936222407223105', q: search , aqi: 'yes' }
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
      setInfo(response.data);

    }).catch(function (error) {
      console.error(error);
    });


  };
  return (
    <>
      <div className='w-full h-screen flex justify-center sm:items-start md:items-center items-start'>


        <div className='interface-bg w-full sm:w-full md:w-full lg:w-full xl:w-4/6 m-3  py-10 sm:py-16 px-5 sm:px-12  rounded-3xl'>

          <div className='grid gap-5 sm:gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-4  border-bottom-color pb-4 mb-6 sm:pb-10 sm:mb-10 md:pb-16 md:mb-16'>

            <div className='justify-center sm:justify-center order-1 sm:order-3 flex sm:col-span-1 w-full'>
              <div className=''>
                <p className=' bg-[#0000003b]  inline px-5 py-2 font-medium  rounded-3xl text-white'>{info.location ? info.location.localtime : ''}</p>

              </div>
            </div>

            <div className='flex justify-center  flex-col  sm:col-span-2 order-3 sm:order-2'>
              <p className='text-center text-white font-medium text-xl  sm:text-lg md:text-2xl '>{info.location ? info.location.name : ''} - {info.location ? info.location.region : ''}</p>
              <p className='text-center text-white text-xl font-thin mt-2'>{info.location ? info.location.country : ''}</p>
            </div>


            <div className='flex justify-center sm:justify-end w-full sm:w-full sm:col-span-1 order-none sm:order-'>
              <div className='relative mb-5 sm:m-0 w-full sm:w-full '>
                <svg className='w-6 h-auto absolute top-2 left-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <input onChange={e => setSearch(e.target.value)} type="text" className=' rounded-3xl w-full sm:w-full  text-white  py-2 pl-10  bg-[#0000003b] placeholder:text-slate-300' placeholder='Search' />
                <button onClick={searchData}  className='bg-yellow-600 hover:bg-slate-900 transition-all ease-in text-white px-3 py-1 rounded-3xl mt-3 absolute sm:right-2 bottom-1 right-2 md:right-2   md:bottom-8 lg:right-0  xl:right-2 lg: '>Buscar</button>
              </div>
            </div>

          </div>



          <Body info={info} />


        </div>

      </div>

    </>
  )
}

export default App

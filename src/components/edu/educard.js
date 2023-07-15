import React from 'react'
import nith from "../../assets/nith2.png";
import kvs from "../../assets/kvs.png";
import "../../index.css";

export default function educard() {
  return (
    <div>

      <a href="https://nith.ac.in/" className='flex flex-row w-full my-16 hover:glow rounded-lg '>
        <span className='mx-4 my-auto h-40 w-44'>
          <img className="object-fill w-full h-full md:h-full md:w-full" src={nith} alt=""></img>
        </span>
        <span>
          <div className="flex flex-col items-center bg-transparent border border-gray-200 rounded-lg md:flex-row md:max-w-full dark:border-gray-700 dark:bg-transparent">
            <div className=' text-gray-900 dark:text-white'>
              <div className="bg-yellow-500 rounded-t-lg flex flex-col justify-between p-4 leading-normal">
                <div className='flex justify-between'>
                  <span className="mb-2 tracking-tight text-2xl font-bold">
                    National Institute of Technology, Hamirpur
                  </span>
                  <span className="mb-2 tracking-tight font-semibold">
                    2021 - Present
                  </span>
                </div>
                <div className='font-semibold'>
                  Electronics and Communication Engineering
                </div>
              </div>
              <div className="list-disc p-6 font-normal text-gray-700 dark:text-gray-400">
                <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
              </div>
            </div>
          </div>
        </span>
      </a>


      <a href="https://nith.ac.in/" className='flex flex-row w-full my-6 hover:glow rounded-lg '>
        <span className='mx-4 my-auto h-40 w-44'>
          <img className="object-fill w-full h-full md:h-full md:w-full" src={kvs} alt=""></img>
        </span>
        <span>
          <div className="flex flex-col items-center bg-transparent border border-gray-200 rounded-lg md:flex-row md:max-w-full dark:border-gray-700 dark:bg-transparent">
            <div className=' text-gray-900 dark:text-white'>
              <div className="bg-yellow-500 rounded-t-lg flex flex-col justify-between p-4 leading-normal">
                <div className='flex justify-between'>
                  <span className="mb-2 tracking-tight text-2xl font-bold">
                    Kendriya Vidyalaya, Hamirpur
                  </span>
                  <span className="mb-2 tracking-tight font-semibold">
                    2017 - 2020
                  </span>
                </div>
                <div className='font-semibold'>
                  10th and 12th
                </div>
              </div>
              <div className="list-disc p-6 font-normal text-gray-700 dark:text-gray-400">
                <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
              </div>
            </div>
          </div>
        </span>
      </a>



    </div>



  )
}

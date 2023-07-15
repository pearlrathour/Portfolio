import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import nith from "../../assets/nith2.png";
import kvs from "../../assets/kvs.png";

export default function edu() {
  return (
    <div name="education" className="h-full w-full mt-10">
      <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4'>
        <div className="flex flex-col justify-center">

          <div className="flex flex-row">
            {/* <img src={eduImg} alt="profile" className="rounded-2xl mx-24 w-1/5 md:w-1/5" /> */}
            <AcademicCapIcon className="h-16 w-16 mr-2 text-white" />
            <span className="text-4xl sm:text-7xl font-bold text-white">
              Education
            </span>
          </div>

          <div className='flex flex-col justify-center w-full'>

            <div className="flex flex-row-reverse items-center w-4/5">
              <div className="flex flex-row items-center pl-60">
                <a href="https://nith.ac.in/" className="-ml-[13px] flex h-24 w-32 items-center justify-center mr-10  rounded-full hover:glow">
                  <img src={nith} alt="nith" />
                </a>

                <div className='flex flex-row w-full my-6 hover:glow rounded-lg '>
                  <span>
                    <div className="flex flex-col items-center bg-transparent border border-gray-200 rounded-lg md:flex-row md:max-w-full dark:border-gray-700 dark:bg-transparent">
                      <div className=' text-gray-900 dark:text-white'>

                        <div className="bg-cyan-700 rounded-t-lg flex flex-col justify-between p-4 leading-normal">
                          <div className='flex justify-between'>
                            <span className="mb-2 tracking-tight text-xl font-bold">
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
                </div>
              </div>
            </div>



            <div className="flex flex-row items-center justify-center w-5/6">
              <div className='flex flex-row items-center pr-60'>
                <div className="flex flex-col items-center bg-transparent border border-gray-200 rounded-lg md:flex-row md:max-w-full dark:border-gray-700 dark:bg-transparent">
                  <div className=' text-gray-900 dark:text-white'>
                    <div className="bg-cyan-700 rounded-t-lg flex flex-col justify-between p-4 leading-normal">
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


                <a href="https://nith.ac.in/" className="flex h-24 w-32 items-center justify-center ml-10  rounded-full hover:glow">
                  <img src={kvs} alt="kvs" />
                </a>
              </div>
            </div>



          </div>
        </div>


      </div>

    </div>
  )
}

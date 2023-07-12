import React from 'react'
import {AcademicCapIcon} from '@heroicons/react/24/outline';
import edu from "../../assets/My project (1).png";
import EducationCard from './EducationCard';

export default function Education() {
  return (
    <div name="home" className="h-screen w-full mt-10">
      <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className="flex flex-col justify-center h-full w-full">
          <div className="flex flex-row justify-start">
            {/* <img src={eduImg} alt="profile" className="rounded-2xl mx-24 w-1/5 md:w-1/5" /> */}
            <AcademicCapIcon className="h-16 w-16 mr-2 text-white" />
            <span className="text-4xl sm:text-7xl font-bold text-white">
              Education
            </span>
          </div>


          <div className="flex flex-col text-gray-500 text-lg py-10 max-w-full">
            <EducationCard/>
          </div>

        </div>
        <div className="w-2/5">
          <img src={edu} alt="profile" className="mx-auto w-full md:w-full" />
        </div>
      </div>
    </div>
  )
}

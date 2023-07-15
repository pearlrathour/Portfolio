import React from 'react'
import { CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function ProjectsCard(props) {
    return (
        <div class="relative group w-96 h-[28pc] border border-white rounded-md overflow-hidden bg-black m-auto mt-36">
            <img class="object-fill w-full h-full transform duration-700 backdrop-opacity-100" src={props.project.img} />
            <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div class="absolute bg-gradient-to-t from-black to-gray-500 w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0 ">

                <div class="absolute w-full place-content-center flex flex-col py-3">
                    <div class="font-bold text-1xl text-center text-white ">
                        {props.project.title}
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        {props.project.tech.map((tech, index) => (
                            <img key={index} src={tech} alt="Tech Icon" className="h-6 w-6 transform transition-all duration-500 group-hover:scale-110" />
                        ))}
                    </div>
                </div>

                <div class="absolute w-full flex place-content-center mt-8">
                    <p class="text-center w-full p-4 text-gray-100 mt-12">{props.project.desc}</p>
                </div>



                <div className='flex flex-col justify-around text-cyan-500 '>
                    <span>
                        <a href={props.project.github}>
                            <CodeBracketIcon className="absolute left-1/4 bottom-4 border-none rounded-full h-6 w-6 transform transition-all duration-500 group-hover:scale-110" />
                        </a>
                    </span>
                    <span>
                        <a href={props.project.link}>
                            <LinkIcon className="absolute right-1/4 bottom-4 h-6 w-20 transform transition-all duration-500 group-hover:scale-110" />
                        </a>
                    </span>
                </div>

            </div>
        </div>

    )
}
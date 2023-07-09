import React from 'react'
import girl from "../assets/girl7.png";

export default function About() {
    return (
        <div name="about" className="h-fit w-full">
            <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-5/6 px-4 md:flex-row'>
                <div className="big-screen">
                    <img src={girl} alt="profile" className="rounded-2xl h-96 md:w-fit" />
                </div>
                <div className="flex flex-col justify-center h-full min-w-max ml-48">
                    <h2 className="text-lg sm:text-5xl text-center font-bold text-white">
                        LET ME INTRODUCE MYSELF
                    </h2>
                    <div className="text-gray-300 text-2xl text-center pt-10 max-w-2xl">
                        <div>ECE junior at NITH</div>
                        <div>Front-end Developer, Competetive Programmer.</div>
                        <div>Always in my learning phase.</div>
                    </div>
                    <div className="text-gray-400 text-2xl text-center py-6 max-w-2xl">
                        <p>Creative and Tech-savvy Web Developer dedicated to develop, contribute and optimize Websites and Web app which are interactive and userfriendly. Team player with an eye for detail. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and leverage analytical problem solver with calm and focused demeanor.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


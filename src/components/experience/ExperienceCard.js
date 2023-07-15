import React from 'react'

export default function ExperienceCard(props) {
    return (
        <a href={props.exp.link} className="flex flex-col shadow-lg shadow-gray-500 bg-blue-100 mx-auto max-w-lg py-10 transform duration-500 hover:-translate-y-4 cursor-pointer max-h-190 rounded-md">
            <div>
                <img className="mx-auto h-36 w-36" src={props.exp.img} alt="" />
            </div>
            <div className="font-bold text-xl mt-8 mb-4 text-gray-800 flex justify-center">{props.exp.position}</div>
            <div className='flex flex-row justify-between mb-4 text-gray-800 px-4'>
                <div className='font-semibold'>{props.exp.company}</div>
                <div className='font-medium'>{props.exp.date}</div>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 mt-6 px-5">
                {props.exp.desc}
            </p>

            {/* <div className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                <div className="min-h-62">
                    <img className="mx-auto" src={GSSoC} alt="" />
                </div>
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">01.</h1>
                <h2 className="font-bold mb-5 text-gray-800">Stylish Egg Chair</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </div>

            <div className="flex flex-col shadow-xl mx-auto max-w-sm bg-yellow-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                <div className="min-h-62">
                    <img className="mx-auto" src={SSoC} alt="" />
                </div>
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">02.</h1>
                <h2 className="font-bold mb-5 text-gray-800">Stylish Leather Bag</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </div>

            <div className="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                <div className="min-h-62">
                    <img className="mx-auto" src={Hacktoberfest} alt="" />
                </div>
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">03.</h1>
                <h2 className="font-bold mb-5 text-gray-800">Modern Wooden Chair</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </div>

            <div className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                <div className="min-h-62">
                    <img className="mx-auto" src={CodessCafe} alt="" />
                </div>
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">04.</h1>
                <h2 className="font-bold mb-5 text-gray-800">Comfortable Chair</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </div>

            <div className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                <div className="min-h-62">
                    <img className="mx-auto" src={SPEC} alt="" />
                </div>
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">04.</h1>
                <h2 className="font-bold mb-5 text-gray-800">Comfortable Chair</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </div>

            <div className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                <div className="min-h-62">
                    <img className="mx-auto" src={Vibhav} alt="" />
                </div>
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">04.</h1>
                <h2 className="font-bold mb-5 text-gray-800">Comfortable Chair</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </div> */}


        </a>
    )
}





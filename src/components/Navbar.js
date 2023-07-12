import React from "react";

export default function Navbar() {
    return (
        <div className="sticky top-0 backdrop-filter backdrop-blur-2xl bg-opacity-30">
            <nav className="bg-black-800">
                <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-16">
                    <div className="relative flex h-24 items-center justify-between">

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <h1 className="text-3xl font-semibold text-gray-200 ml-20"><a href="/" target="_blank" rel="noreferrer">Pearl</a>
                                <span className="text-gray-500">
                                    .Rathour
                                </span>
                            </h1>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-2 text-base font-semibold">
                                    <a href="/" className="bg-gray-700 text-white rounded-md px-3 py-2" aria-current="page">Home</a>
                                    <a href="/Education" className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2">Education</a>
                                    <a href="/Skills" className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2">Skills</a>
                                    <a href="/" className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2">Experience</a>
                                    <a href="/" className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2">Contact</a>

                                    {/* <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                        </svg>
                                    </button> */}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">

                        <a href="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Education</a>
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Skills</a>
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Experience</a>
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
                    </div>
                </div> */}

            </nav>
        </div>
    );
};

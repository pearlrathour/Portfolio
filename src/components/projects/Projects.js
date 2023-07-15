import React from 'react'
import ProjectsCard from './ProjectsCard'

import ParkShare from '../../assets/projects/ParkShare.png'
import NewsApp from '../../assets/projects/NewsApp.png'
import Textify from '../../assets/projects/Textify-dark-theme.png'
import TicTacToe from '../../assets/projects/TicTacToe.png'
import ComputerVision from '../../assets/projects/ComputerVision1.png'
import ExploringThePast from '../../assets/projects/ExploringThePast1.png'
import CampusConnect from '../../assets/projects/CampusConnect4.png'
import Tetris from '../../assets/projects/Tetris.png'
import ToDo from '../../assets/projects/ToDo.png'

import react from '../../assets/react.png'
import bootstrap from '../../assets/bootstrap.png'
import tailwind from '../../assets/tailwind.png'
import express from '../../assets/express.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import sql from '../../assets/sql.png'
import django from '../../assets/django.png'
import mongodb from '../../assets/mongodb.png'
import ejs from '../../assets/ejs.png'
import opencv from '../../assets/opencv.png'
import python from '../../assets/python.png'
import blender from '../../assets/blender.svg'
import threejs from '../../assets/3js.png'
import solidity from '../../assets/solidity.png'

export default function Projects() {

  const projects = [
    {
      title: "ParkShare",
      img: ParkShare,
      desc: "An innovative parking solution that facilitates seamless connections between parking space owners with those in need of parking enhancing social, economic, and environmental aspects, making it an all-encompassing solution for all stakeholders.",
      link: "https://parkshare.onrender.com/",
      github: "https://github.com/pearlrathour/ParkShare",
      tech: [html, js, tailwind, express, mongodb]
    },
    {
      title: "News App",
      img: NewsApp,
      desc: "The News App offers real-time news from India, covering diverse categories and delivering an up-to-date and comprehensive news experience",
      link: "https://github.com/pearlrathour/News-App",
      github: "https://github.com/pearlrathour/News-App",
      tech: [react, bootstrap]
    },
    {
      title: "Exploring The Past",
      img: ExploringThePast,
      desc: "Encourages tourism by delivering immersive experiences of bygone periods, boosting awareness of cultural and historical sites, and advocating for sustainable tourism.",
      link: "https://replit.com/@Comreton/History-VR?v=1",
      github: "https://github.com/pearlrathour/kullu-history-threejs",
      tech: [html, js, tailwind, blender, threejs, sql, react, solidity]
    },
    {
      title: "Campus Connect",
      img: CampusConnect,
      desc: "An integrated platform with the goal of connecting India’s technological and cultural organizations. Categorized and screened disciplines of society to facilitate collaboration, exchange, and dissemination of technical and cultural knowledge among like-minded people.",
      link: "https://github.com/pearlrathour/Campus-Connect",
      github: "https://github.com/pearlrathour/Campus-Connect",
      tech: [html, css, js, django, sql]
    },
    {
      title: "To Do App",
      img: ToDo,
      desc: "A app to manage your daily tasks in smarter way.",
      link: "https://github.com/pearlrathour/To-do-list",
      github: "https://github.com/pearlrathour/To-do-list",
      tech: [express, ejs, css]
    },
    {
      title: "Textify",
      img: Textify,
      desc: "Textify is a tool that can be used to perform many operations on text, such as converting it to lowercase or uppercase, removing extra spaces, copying text, and clearing text.",
      link: "https://textify-k96wa9u86-pearlrathour.vercel.app/",
      github: "https://github.com/pearlrathour/Textify",
      tech: [react, bootstrap]
    },
    {
      title: "Computer Vision",
      img: ComputerVision,
      desc: "Car detection, face, and eye detection, live face and eye detection.",
      link: "https://github.com/pearlrathour/Computer-Vision",
      github: "https://github.com/pearlrathour/Computer-Vision",
      tech: [python, opencv]
    },
    {
      title: "Tetris",
      img: Tetris,
      desc: "Tetris is a web-based game where Tetriminos fall from the top of the grid and stack up at the bottom. Players rotate the Tetriminos to form complete rows across the field to win. The game ends when the Tetriminos reach the top of the grid.",
      link: "https://tetris-game-alpha.vercel.app/",
      github: "https://github.com/pearlrathour/Tetris",
      tech: [html, js, css]
    },
    {
      title: "Tic Tac Toe",
      img: TicTacToe,
      desc: "Tic Tac Toe is a game where two players take turns marking spaces on a 3x3 grid. The objective is to get three of their symbols in a row.",
      link: "https://github.com/pearlrathour/Tic-Tac-Toe",
      github: "https://github.com/pearlrathour/Tic-Tac-Toe",
      tech: [html, js, css]
    }
  ];

  return (
    <div name="projects" className="h-full w-full my-20">
      <div className='relative max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className="flex flex-col justify-center h-full w-full">

          <div className="flex flex-row justify-center text-4xl text-white sm:text-7xl font-bold">
            Projects
          </div>

          <div className="grid grid-cols-3 gap-x-6 text-gray-500 text-lg max-w-full">
            {projects.map((project) => (
              <ProjectsCard project={project} />
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

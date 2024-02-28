import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // const myPath=window.location.pathname;
  return (
    <div>
      <header style={{zIndex:5}} className="bg-white drop-shadow-xl fixed p-1 w-full top-0 h-16">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link className="block text-purple-500" to="/">
          <span className="sr-only">Home</span>
          <svg width="58" height="58" viewBox="0 0 319 318" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="154.954" cy="187.649" rx="80.5" ry="90.5" transform="rotate(-16.8089 154.954 187.649)" fill="#B764DD"/>
<ellipse cx="176.658" cy="192.061" rx="68" ry="80" transform="rotate(-16.8089 176.658 192.061)" fill="white"/>
<g style={{mixBlendMode:"multiply"}}>
<ellipse cx="154.404" cy="160.403" rx="121.469" ry="125.808" transform="rotate(-17.4423 154.404 160.403)" fill="#B764DD"/>
<ellipse cx="186.851" cy="165.509" rx="102.607" ry="111.211" transform="rotate(-17.4423 186.851 165.509)" fill="white"/>
</g>
<g style={{mixBlendMode:"multiply"}}>
<ellipse cx="157.187" cy="178.76" rx="101.761" ry="107.186" transform="rotate(-17.0479 157.187 178.76)" fill="#B764DD"/>
<ellipse cx="177.128" cy="179.786" rx="89.5794" ry="101.016" transform="rotate(-17.0479 177.128 179.786)" fill="white"/>
</g>
</svg>


        </Link>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
              <li>
              <Link to="/home" className="text-gray-800 font-bold text-lg  transition hover:text-purple-500/75 " > Home </Link>
            </li>
            <li>
              <Link to="/Feed" className="text-gray-800 font-bold text-lg transition hover:text-purple-500/75 " > Feed </Link>
            </li>

            <li>
              <Link to="/LeaderBoard" className="text-gray-800 font-bold text-lg transition hover:text-purple-500/75 " > Leader Board </Link>
            </li>

            <li>
              <Link to="/AboutUs" className="text-gray-800 font-bold text-lg  transition hover:text-purple-500/75 " > About us </Link>
            </li>

            <li>
              <Link to="/ContactUs" className="text-gray-800 font-bold text-lg transition hover:text-purple-500/75 " > Contact us </Link>
            </li>

            
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-md bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow"
            to="/Login"
          >
            Login
          </Link>

          <div className="hidden sm:flex">
            <Link
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-purple-500"
              to="/SignUp"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar

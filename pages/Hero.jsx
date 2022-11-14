import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// import '../styles/hero.css'
const Hero = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme])
  return (
    <div>
      <section className="">

        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="svg absolute hidden lg:block"
          style={{ "height": "560px", width: "100%", "z-index": "-10", "overflow": "hidden" }}
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="hsl(217, 102%, 99%)" offset="0%"></stop>
              <stop stopColor="hsl(217,88%, 93%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
          ></path>
        </svg>

        <div className="px-6 py-12 lg:mb-12 md:px-12 text-center lg:text-left">
          <div className="container mx-auto xl:px-28">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center py-12">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 ">Hi,
                  I,m Tarek Ahmed .
                  <br /><span className="text-blue-600  text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">A Web Developer.</span></h1>
                <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get </a>
                <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">cv</a>
              </div>
              <div className="mb-12 lg:mb-0">
                <Image src="/images/g3.png" className="w-full hero_img drop-shadow-md " alt="" width={500}
                  height={500} />
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default Hero
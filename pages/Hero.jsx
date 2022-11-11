import React from 'react'

const Hero = () => {
  return (
   <div>  <section class="mb-40">
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div>

   <svg
     data-name="Layer 1"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 1440 320"
     preserveAspectRatio="none"
     class="svg absolute hidden lg:block"
     style={{"height": "560px", width: "100%", "z-index":"-10", "overflow": "hidden"}}
   >
     <defs>
       <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
         <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
         <stop stop-color="hsl(217,88%, 93%)" offset="100%"></stop>
       </linearGradient>
     </defs>
     <path
       fill="url(#sw-gradient-0)"
       d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
     ></path>
   </svg>

   <div class="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
     <div class="container mx-auto xl:px-32">
       <div class="grid lg:grid-cols-2 gap-12 flex items-center">
         <div class="mt-12 lg:mt-0">
           <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Hi Iam  <br /><span class="text-blue-600">Tarek Ahmed</span></h1>
           <a class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get </a>
           <a class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">cv</a>
         </div>
         <div class="mb-12 lg:mb-0">
           <img src="https://mdbootstrap.com/img/new/standard/city/017.jpg"
             class="w-full rounded-lg shadow-lg"
             alt=""
           />
         </div>
       </div>
     </div>
   </div>
 </section></div>
  )
}

export default Hero
import React from "react";
import NOKLER from "../assets/noklerlogo.png";
import RAWGIO from "../assets/RawgioAPI.png";

function Work() {
  return (
    <div name="work" className="w-full h-full py-36 bg-light_background dark:bg-background text-light_text dark:text-text transition-all duration-700">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-6xl w-full px-6">
          <div className="pb-10">
            <p className="text-4xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
              02.Work
            </p>
          </div>
        </div>

        {/* NOKLER GAMES - PG */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col h-full my-6 lg:flex-row">
            <img
              className="mx-6 my-auto lg:max-h-80"
              src={NOKLER}
              alt="Nokler Logo"
            />
            <span className="lg:h-[360px] lg:w-2 lg:my-auto lg:bg-light_structure lg:dark:bg-structure transition-all duration-700"></span>
            <div className="flex flex-col items-start justify-start h-full text-justify">
              <h1 className="text-3xl font-bold mb-4 mt-0 mx-6 uppercase">
                Nøkler
                <p className="text-light_title dark:text-title text-xs border-b-4 border-light_structure dark:border-structure transition-all duration-700">
                  Date: March '22 / Role: Front end Developer
                </p>
              </h1>
              <div className="mx-6 text-base transition-all font-semibold">
                <p>
                  Developed as a final group project for the SoyHenry Bootcamp,
                  this e-commerce was created to sell digital keys for
                  videogames worldwide, available for various platforms.
                </p>
              </div>
              <div className="mx-6 text-sm">
                <p className="text-light_title dark:text-title text-xs font-bold mt-4 mb-1 uppercase transition-all duration-700">
                  Technologies:
                </p>
                <div className="flex flex-row flex-wrap font-semibold py-1 border-b-4 border-t-4 border-light_structure dark:border-structure">
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    JavaScript
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    React
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Redux
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Framer Motion
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Chakra UI
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Nodejs
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Auth0
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Stripe
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Prisma
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Express
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center mx-6 text-sm">
                <div className="my-8">
                  <a
                    href="https://nokler-noklerhenry.vercel.app/"
                    className="mx-2 py-3 font-bold text-black group relative px-4 transition-all duration-700 lg:px-6"
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                    <span className="relative">Visit</span>
                  </a>
                </div>
                <div className="my-8">
                  <a
                    href="https://github.com/noklerhenry/nokler-client"
                    className="mx-2 py-3 font-bold text-black group relative px-4 transition-all duration-700 lg:px-6"
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                    <span className="relative">Repository</span>
                  </a>
                </div>
                <div className="my-8">
                  <a
                    href="https://vimeo.com/697512403"
                    className="mx-2 py-3 font-bold text-black group relative px-4 transition-all duration-700 lg:px-6"
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                    <span className="relative">Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <span className="w-4/5 h-1 my-4 bg-light_structure dark:bg-structure transition-all duration-700"></span>

          {/* RAWG.IO API - VIDEOGAMES API */}
          <div className="flex flex-col h-full my-6 lg:flex-row">
            <img
              className="mx-6 my-auto lg:max-h-80"
              src={RAWGIO}
              alt="RAWGIO Logo"
            />
            <span className="lg:h-[360px] h- lg:w-2 lg:my-auto lg:bg-light_structure lg:dark:bg-structure transition-all duration-700"></span>
            <div className="flex flex-col items-start justify-start h-full text-justify">
              <h1 className="text-3xl font-bold mb-4 mt-0 mx-6 uppercase">
                PixelGames
                <p className="text-light_title dark:text-title text-xs border-b-4 border-light_structure dark:border-structure transition-all duration-700">
                  Date: January '22 / Role: Full Stack Developer
                </p>
              </h1>
              <div className="mx-6 text-base transition-all font-semibold">
                <p>
                  Development of a SPA using React for the Front-end, and Redux
                  as stage management. The components were developed with CSS
                  without the use of external libraries. It consumes data from
                  an API (rawg.io) through a Back-end developed in NodeJS using
                  Express, adding new functionalities to the original API.
                </p>
              </div>
              <div className="mx-6 text-sm">
                <p className="text-light_title dark:text-title text-xs font-bold mt-4 mb-1 uppercase transition-all duration-700">
                  Technologies:
                </p>
                <div className="flex flex-row flex-wrap font-semibold py-1 border-b-4 border-t-4 border-light_structure dark:border-structure">
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    JavaScript
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    React
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Redux
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    CSS
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Nodejs
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Express
                  </span>
                  <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
                    Sequelize
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center mx-6 text-sm">
                <div className="my-8">
                  <a
                    href="/"
                    className="mx-2 py-3 font-bold text-black group relative px-4 transition-all duration-700 lg:px-6"
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                    <span className="relative">Visit</span>
                  </a>
                </div>
                <div className="my-8">
                  <a
                    href="https://github.com/MaximilianoCidron/PI-Videogames-main"
                    className="mx-2 py-3 font-bold text-black group relative px-4 transition-all duration-700 lg:px-6"
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                    <span className="relative">Repository</span>
                  </a>
                </div>
                <div className="my-8">
                  <a
                    href="/"
                    className="mx-2 py-3 font-bold text-black group relative px-4 transition-all duration-700 lg:px-6"
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                    <span className="relative">Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

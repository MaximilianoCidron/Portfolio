import React, { useContext } from "react";
import { Link } from "react-scroll";
import ProfilePick from "../assets/ProfilePick.jpg";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import REDUX from "../assets/redux.png";
import GITHUB from "../assets/github.png";
import GITHUBLIGHT from "../assets/githubLight.png";
import NODE from "../assets/node.png";
import EXPRESS from "../assets/expressjs.png";
import SEQUELIZE from "../assets/sequelize.png";
import TAILWIND from "../assets/tailwind.png";
import { ThemeContext } from "./themeContext";

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      name="about"
      className="w-full h-full py-36 bg-light_background dark:bg-background text-light_text dark:text-text transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-6xl w-full px-6">
          <div className="pb-10">
            <p className="text-4xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
              02.About
            </p>
          </div>
        </div>
        <div className="h-auto w-full items-center justify-around max-w-5xl grid grid-cols-2 px-6 lg:max-w-5xl lg:w-full lg:px-4 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center">
            <img
              src={ProfilePick}
              alt="Profile.jpg"
              className="border-4 border-double rounded border-light_subtitle dark:border-subtitle max-h-64 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="my-8">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
                className="relative cursor-pointer mx-2 py-3 font-bold text-black group px-6 transition-all duration-700"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">Contact me!</span>
              </Link>
            </div>
            <div className="my-8">
              <a
                href="../assets/English_CV_Maximiliano_Cidron.pdf"
                download
                className="mx-2 py-3 font-bold text-black group relative px-[58px] transition-all duration-700"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">CV ↓</span>
              </a>
            </div>
          </div>

          <div className="text-justify col-span-2 py-4 font-semibold lg:row-start-1 lg:col-start-2">
            <p>
              Hi! I’m Maxi a Full-stack developer, Front-end enthusiast, with a
              strong capacity to bring new and innovative ideas and great skill
              developing modular programming projects. I have the versatility
              needed for team work and I’m always willing to listen and
              considerate other people’s opinions. I’m always eager to grow
              professionally.
            </p>
          </div>

          <div className="text-justify col-span-2 py-4 font-semibold lg:row-start-2 lg:col-start-2">
            <p>
              I had the chance to be a Teaching Assistant during SoyHenry
              Bootcamp, which help improving my soft skills and learned to
              manage a large group of people. This experience gave me a chance
              to help others deal with their projects in different ways,
              approach team work with a keenness to listen and take into account
              other voices to bring a new perspective to the work.
            </p>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <p className="text-lg lg:text-xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
              Technologies I've worked with:
            </p>
          </div>
          <div className="col-span-2 lg:col-span-3">
            <div className="w-full font-semibold grid grid-cols-2 lg:grid-cols-5 gap-4 text-center py-8">
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={HTML}
                  alt="HTML Icon"
                />
                <p>HTML</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={CSS}
                  alt="CSS Icon"
                />
                <p>CSS</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={JAVASCRIPT}
                  alt="JS Icon"
                />
                <p>JavaScript</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={REACT}
                  alt="REACT Icon"
                />
                <p>React</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={REDUX}
                  alt="REDUX Icon"
                />
                <p>Redux</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={ theme === "dark" ? GITHUBLIGHT : GITHUB }
                  alt="GITHUB Icon"
                />
                <p>GitHub</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={NODE}
                  alt="NODE Icon"
                />
                <p>Node.js</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={EXPRESS}
                  alt="EXPRESS Icon"
                />
                <p>Express.js</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={SEQUELIZE}
                  alt="SEQUELIZE Icon"
                />
                <p>Sequelize</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
              <div className="relative group transition-all">
                <img
                  className="w-20 max-h-20 mx-auto my-1"
                  src={TAILWIND}
                  alt="TAILWIND Icon"
                />
                <p>Tailwind CSS</p>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
                <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

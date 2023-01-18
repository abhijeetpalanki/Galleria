import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import wave from "../assets/wave.png";

const Main = () => {
  return (
    <div className="px-10 flex justify-center items-center">
      <section>
        <div className="text-center p-10 shadow-lg rounded-xl my-10 bg-gray-200 ">
          <h2 className="text-5xl md:text-6xl py-2 text-teal-600 font-medium">
            Abhijeet Palanki
          </h2>
          <h3 className="text-2xl py-2">Full Stack Web Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            I'm a Full Stack Software Developer with experience in various
            technologies such as C#, React.js, React Native, Vue.js, .NET, Unity
            and Microsoft SQL Server. I love exploring new frameworks like
            Particle.js, Three.js and Framer Motion.
          </p>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <a
              href="https://www.twitter.com/abhiyourpal"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle className="hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeetpalanki"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="hover:text-black" />
            </a>
            <a
              href="http://www.instagram.com/abhi.your.pal"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="hover:text-black" />
            </a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-20 overflow-hidden">
            <img src={wave} alt="wave" className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

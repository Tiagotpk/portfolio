import Layout from "../components/Layout"
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa6"
import { SiTypescript } from "react-icons/si"
import AOS from 'aos'

AOS.init({
  duration: 1000,
})

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          {/* Intro Section */}
          <div className="h-screen bg-theme">
            <div
              className="grid md:grid-cols-1 grid-cols-2 h-screen items-center 
            border-4 md:border-0 border-white mx-10 z-10 bg-theme
            transform rotate-12 md:rotate-0"
            >
              <div className="h-1/2 md:-mt-20">
                <lottie-player
                  src="https://lottie.host/ea886309-1723-4fe9-9dfd-93177bf7ad9e/ZagVG9RsGj.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  direction="1"
                  mode="normal"
                ></lottie-player>
              </div>
              <div className="text-6xl text-white font-bold md:text-4xl md:px-5 md:-mt-20">
                <h1 data-aos='slide-right'>Seja Bem-Vindo(a)!</h1>
                <h1 data-aos="slide-left">
                  Sou o <b className="text-green-500">Tiago</b>.
                </h1>
                <h1 className="text-4xl text-red-500 md:text-xl" data-aos="slide-left">
                  Fullstack Developer
                </h1>
              </div>
            </div>
          </div>

          {/* Tecnologias */}
          <div className="mt-20">
            <h1 className="text-4xl font-bold text-center my-8" data-aos="slide-up">
              Tecnologias que uso:
            </h1>
            <div className="grid md:grid-cols-1 grid-cols-4">
              <FaReact
                size={180}
                color="#7fffd4"
                className="w-full text-center mt-20 animate-bounce"
              />
              <FaAngular
                size={180}
                color="#dd1b16"
                className="w-full text-center mt-20"
              />
              <FaJs
                size={180}
                color="#feb236"
                className="w-full text-center mt-20 animate-bounce"
              />
              <FaBootstrap
                size={180}
                color="#563d76"
                className="w-full text-center mt-20"
              />
              <FaSass
                size={180}
                color="#eca1a6"
                className="w-full text-center mt-20"
              />
              <FaHtml5
                size={180}
                color="#e34c26"
                className="w-full text-center mt-20 animate-bounce"
              />
              <FaCss3
                size={180}
                color="#2965f1"
                className="w-full text-center mt-20"
              />
              <SiTypescript
                size={180}
                color="#034f84"
                className="w-full text-center mt-20 animate-bounce"
              />
            </div>
          </div>

          {/* Sobre mim */}
          <div className="my-20">
            <div className="text-center h-52 bg-primary">
              <h1 className="text-4xl font-bold text-white py-10">
                Quem é o Tiago???
              </h1>
            </div>

            <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
              <div className="h-96" data-aos="zoom-in">
                <lottie-player
                  src="https://lottie.host/6f613183-0aea-4a02-8ae1-30b3ffe7972e/WgBEmNo4TV.json"
                  background="##FFFFFF"
                  speed="1"
                  loop
                  autoplay
                  direction="1"
                  mode="normal"
                ></lottie-player>
              </div>
              <p className="text-2xl text-center my-5 font-semibold md:mx-5 px-14 py-10">
                Alguma coisa sobre mim aqui . . . .
              </p>
            </div>
          </div>

          {/* Stack */}
          <div className="my-20">
            <div className="text-center h-52 bg-secondary">
              <h1 className="text-4xl font-bold text-white py-10">
                Minha Stack Atual
              </h1>
            </div>

            <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
              <div className="h-96" data-aos="zoom-in">
                <lottie-player
                  src="https://lottie.host/93c48ed0-df25-486d-b2be-92ac1cf751fb/jMAVs1eC6R.json"
                  background="##FFFFFF"
                  speed="1"
                  loop
                  autoplay
                  direction="1"
                  mode="normal"
                ></lottie-player>
              </div>
              <div className="grid md:grid-cols-1 grid-cols-3">
                <div className="pl-10">
                  <h1 className="font-bold text-2xl">Front End</h1>
                  <hr className="border-gray-50 hover:border-gray-700 transition-colors" />
                  <p className="font-semibold my-2">HTML/CSS</p>
                  <p className="font-semibold my-2">JavaScript</p>
                  <p className="font-semibold my-2">React</p>
                  <p className="font-semibold my-2">Angular</p>
                </div>

                <div className="text-center">
                  <h1 className="font-bold text-2xl">UI/UX</h1>
                  <hr className="border-gray-50 hover:border-gray-700 transition-colors" />
                  <p className="font-semibold my-2">Figma</p>
                  <p className="font-semibold my-2">Bootstrap</p>
                  <p className="font-semibold my-2">Sass/Scss</p>
                  <p className="font-semibold my-2">Tailwind</p>
                </div>

                <div className="text-right pr-10">
                  <h1 className="font-bold text-2xl">Back End/BD</h1>
                  <hr className="border-gray-50 hover:border-gray-700 transition-colors" />
                  <p className="font-semibold my-2">MySQL</p>
                  <p className="font-semibold my-2">NodeJS</p>
                  <p className="font-semibold my-2">Python</p>
                  <p className="font-semibold my-2">MongoDB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dev Info */}
          <div>
            <h1 className="text-4xl text-gray-500 text-center font-bold">
              Mais fatos sobre mim:
            </h1>
            <div className="h-screen relative text-gray-600">
              <div className="h-full">
                <lottie-player
                  src="https://lottie.host/533bd908-d540-446f-bdea-3eb38d4e9f3e/0T8xclKDvu.json"
                  background="##FFFFFF"
                  speed="1"
                  loop
                  autoplay
                  direction="1"
                  mode="normal"
                ></lottie-player>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-left w-1/3">
                  Sou eu de novo hehehe. . .
                <hr />
                <pre className="text-xl my-5 font-mont font-semibold">
                  {JSON.stringify(
                    {
                      name: "Tiago",
                      age: "29",
                      gender: "masculino",
                      country: "Brasil",
                      state: "MG",
                    },
                    null,
                    2
                  )}
                </pre>
                </h1>
              </div>
            </div>
          </div>
          
        </div>
      </Layout>
    </>
  );
}

import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="h-44 md:h-28">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2a2a"
            fillOpacity="1"
            d="M0,64L17.1,69.3C34.3,75,69,85,103,128C137.1,171,171,245,206,229.3C240,213,274,107,309,106.7C342.9,107,377,213,411,256C445.7,299,480,277,514,250.7C548.6,224,583,192,617,154.7C651.4,117,686,75,720,90.7C754.3,107,789,181,823,197.3C857.1,213,891,171,926,133.3C960,96,994,64,1029,80C1062.9,96,1097,160,1131,176C1165.7,192,1200,160,1234,138.7C1268.6,117,1303,107,1337,117.3C1371.4,128,1406,160,1423,176L1440,192L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-5 font-mont text-center text-gray-50">
            <p className="pb-5">Projetado e Desenvolvido por</p>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>

            <div className="flex w-full justify-between pt-5 md:justify-center md:space-x-5">
              <a
                href="https://www.linkedin.com/in/tiagotpk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/tiagotpk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="h-1 border-2 border-gray-50 border-dotted mt-5"></div>
            <p className="my-5">Tiago Reis @tiagotpk</p>
          </div>
        </div>
      </div>
    </>
  );
}

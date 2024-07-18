import Layout from "../components/Layout"
import projectsData from "../resources/Projects"
import AOS from 'aos'

AOS.init({
  duration: 1000,
})


export default function Projects() {
  const handleRedirect = (url) => {
    window.open(url,'_blank')
  };

  return (
    <>
      <Layout>
        <div className="mt-20">
          <div className="h-screen">
            {/* Card */}
            <div className="h-3/4">
              <lottie-player
                src="https://lottie.host/87430b9c-0c68-41e5-8a2e-7c45d14a9999/Mn7KBF2Ypr.json"
                background="##FFFFFF"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>
            <p className="text-xl font-semibold text-center sm:text-sm">
              Boas ideias não são adotadas automaticamente, elas devem ser
              levadas à prática com paciência e coragem...
            </p>
            <h1 className="text-3xl font-bold text-center mt-5 sm:text-sm" data-aos="slide-up">PORQUE</h1>
          </div>
          <div className="font-bold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5 sm:mx-3">
            <h1 className="text-7xl md:text-3xl sm:text-lg" data-aos="slide-right" >O SEGREDO É . . .</h1>
            <h1 className="text-7xl md:text-3xl sm:text-lg" data-aos="slide-left" >A CONSTÂNCIA!!</h1>
          </div>
        </div>
        <div className="grid mt-20 md:grid-cols-1 sm:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5 sm:mx-3">
          {projectsData.map((project) => {
            return (
              <div key={project.title}>
                <div className="relative p-10 border-2 rounded-tr-3xl rounded-bl-3xl border-gray-400 text-center">
                  <img
                    src={project.image}
                    alt={project.description}
                    className="w-full h-56 text-center md:h-96"
                  />

                  <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 text-white rounded-tr-3xl rounded-bl-3xl">
                    <h1 className="text-4xl font-semibold">{project.title}</h1>
                    <button
                      onClick={() => handleRedirect(project.access)}
                      className="border-2 rounded border-white p-2 hover:bg-green-500 py-2 px-5 mt-5"
                    >
                      Projeto
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  )
}

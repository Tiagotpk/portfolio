import { useState } from "react"
import emailjs from 'emailjs-com'
import Layout from "../components/Layout"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_s52xj44', // Substitua pelo seu Service ID
      'template_w7hs0kf', // Substitua pelo seu Template ID
      formData,
      'CdNgkNzUeO2po6j28' // Substitua pelo seu Public Key
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mensagem enviada com sucesso!');
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Falha ao enviar a mensagem.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }
  return (
    <>
      <Layout>
        <div>
          <div className="h-screen mt-6">
            <lottie-player
              src="https://lottie.host/2a0db688-d32a-43ec-8abc-c19c4c0f5cb5/Qx6JCvZsyU.json"
              background="##FFFFFF"
              speed="1"
              loop
              autoplay
              direction="1"
              mode="normal"
            ></lottie-player>
          </div>
          <div className="w-screen flex justify-center">
            <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50 sm:p-0 sm:-mt-20">
            <h1 className="text-2xl font-semibold text-center sm:text-sm">
              Entre em contato para me conhecer melhor
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                />
                <textarea
                  name="message"
                  placeholder="Sua mensagem aqui..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                />
                <button
                  type="submit"
                  className="bg-red-500 rounded text-white px-5 py-1 mt-3"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

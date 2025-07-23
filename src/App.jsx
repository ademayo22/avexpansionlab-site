import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link as ScrollLink } from "react-scroll";
import { Instagram, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import emailjs from "@emailjs/browser";

export default function AVExpLabEvergladeStyle() {
  const [scrolled, setScrolled] = useState(false);
  const form = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jm42dlc",
        "template_fale4ap",
        form.current,
        "HUn0qgqFheVNjHnkr"
      )
      .then(() => alert("Mensaje enviado con éxito"))
      .catch(() => alert("Error al enviar el mensaje"));
    e.target.reset();
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header
        className={`fixed w-full z-50 flex items-center justify-between px-6 py-4 transition duration-300 ${
          scrolled ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
        }`}
      >
        <img src="/logo-avexpansionlab.svg" alt="AV Expansion Lab" className="h-8" />
        <nav className="space-x-6 text-sm font-medium">
          {["Inicio", "Servicios", "Nosotros", "Casos", "Contacto"].map((link) => (
            <ScrollLink
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-60}
              className="cursor-pointer hover:underline"
            >
              {link}
            </ScrollLink>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformando ideas
            <br />
            en soluciones digitales
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Consultoría estratégica en tecnología para empresas que buscan impacto real.
          </p>
          <ScrollLink
            to="contacto"
            smooth={true}
            duration={500}
            offset={-60}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition cursor-pointer"
          >
            Hablemos ahora
          </ScrollLink>
        </motion.div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">Nuestros Servicios</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Estrategia & Diagnóstico",
              text: "Roadmaps, evaluaciones y optimización tecnológica",
            },
            {
              title: "Gestión & Ejecución",
              text: "Implementación ágil de proyectos con enfoque en resultados",
            },
            {
              title: "Capacitación & Acompañamiento",
              text: "Mentorías y formación para potenciar equipos",
            },
            {
              title: "Transformación Digital",
              text: "Alineamos tecnología con objetivos de negocio",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white shadow-sm hover:shadow-md border-b-4 border-indigo-600 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i }}
            >
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6" id="partners">
        <h2 className="text-3xl font-semibold text-center mb-8">Partners tecnológicos</h2>
        <div className="flex justify-center items-center gap-12 overflow-auto px-4">
          {["aws", "azure", "redhat", "googlecloud", "salesforce"].map((p) => (
            <img
              key={p}
              src={`/logos/${p}.svg`}
              alt={p}
              className="h-12 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Sobre Nosotros</h2>
          <p className="text-lg text-gray-700">
            En AV EXPANSION LAB impulsamos el crecimiento de negocios a través de soluciones
            tecnológicas de vanguardia, con un enfoque humano, ágil y estratégico.
          </p>
        </div>
      </section>

      {/* Casos */}
      <section id="casos" className="py-20 bg-gray-50 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Casos de éxito</h2>
        <Swiper slidesPerView={1} spaceBetween={20} className="max-w-xl mx-auto">
          {[
            {
              quote: "AV EXPANSION LAB nos ayudó a lanzar nuestra plataforma en tiempo récord.",
              author: "— 200dev, CEO",
            },
            {
              quote: "La metodología y entrega fueron impecables.",
              author: "— CTO Empresa X",
            },
          ].map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-md rounded-lg p-8 text-center">
                <p className="italic text-lg text-gray-700 mb-4">"{t.quote}"</p>
                <p className="font-semibold text-indigo-600">{t.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">Contáctanos</h2>
        <div className="max-w-md mx-auto space-y-6">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
            >
              Enviar
            </button>
          </form>
          <div className="text-center text-gray-600">
            <p>📧 contacto@avexpansionlab.com | ☎ +54 11 5555-5555</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://www.x.com" target="_blank" aria-label="X" rel="noopener noreferrer">
            <SiX size={20} />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 AV EXPANSION LAB. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  // ... (keep your testimonials array as is)
  {
    name: "Luana",
    role: "Usuária Diária",
    image: "/luana.webp",
    rating: 5,
    text: "A OPS MOVE mudou completamente meu trajeto diário. Os motoristas são sempre pontuais e profissionais. Nunca espero mais de 5 minutos por uma corrida!",
  },
  {
    name: "Ismael",
    role: "Viajante e Lutador Profissional",
    image: "/ismael.webp",
    rating: 5,
    text: "Como alguém que viaja frequentemente a trabalho, confio na OPS MOVE em várias cidades. A consistência do serviço e a facilidade de uso fazem dela minha escolha número um.",
  },
  {
    name: "Juliana",
    role: "Usuária Diária",
    image: "/juliana.webp",
    rating: 5,
    text: "Preciso de um transporte confiável que me faça sentir segura. A OPS MOVE tem sido essencial com seus recursos de rastreamento e motoristas verificados.",
  },
  {
    name: "Rone",
    role: "Usuário de Fim de Semana",
    image: "/rone.webp",
    rating: 5,
    text: "As tarifas de fim de semana são ótimas, e nunca preciso me preocupar em encontrar um motorista. O app é intuitivo e os motoristas são simpáticos. Super recomendo!",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-brand-black text-white overflow-hidden"
      ref={ref}
    >
      <div className="container-custom relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-40 h-40 bg-brand-primary rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-0 w-60 h-60 bg-brand-primary rounded-full opacity-10"></div>

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16"> {/* Adjusted margin slightly */}
            <h2 className="mb-4 text-white">O que Nossos <span className="text-brand-primary">Passageiros Dizem</span></h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-400">
              Não acredite apenas em nossa palavra - ouça quem usa a OPS MOVE todos os dias
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  // Grid setup: Mobile = 1 column, Medium+ = 2 columns
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                  {/* === Change 1: Text Content Block (Now first in DOM) === */}
                  {/* Text content will appear FIRST on mobile (default grid flow) */}
                  {/* Text content will appear SECOND on desktop (order-2) */}
                  <div className="md:order-2 p-4 md:p-0"> {/* Added padding for mobile */}
                    {/* === Change 2: Quote Icon Repositioned === */}
                    {/* Removed absolute positioning, added margin-bottom */}
                    <Quote className="w-12 h-12 text-brand-primary opacity-50 mb-6" /> {/* Adjusted margin */}

                    {/* === Change 3: Removed unnecessary relative wrapper === */}
                    {/* Content starts here */}
                    <h3 className="text-2xl font-bold mb-2"> {/* Reduced margin slightly */}
                      {testimonials[current].name}
                    </h3>
                    <p className="text-gray-400 mb-4">{testimonials[current].role}</p> {/* Adjusted margin */}
                    <div className="flex mb-4"> {/* Adjusted margin */}
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[current].rating
                              ? "text-brand-primary fill-brand-primary"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg text-gray-300 italic">
                      "{testimonials[current].text}"
                    </p>
                    {/* Content ends here */}
                  </div>

                  {/* === Change 1: Testimonial Image Block (Now second in DOM) === */}
                  {/* Image will appear SECOND on mobile (default grid flow) */}
                  {/* Image will appear FIRST on desktop (order-1) */}
                  <div className="md:order-1 flex justify-center">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-brand-primary">
                      <Image
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optional: Add sizes prop for optimization
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls (No changes needed here unless touch targets are too small) */}
              <div className="flex justify-center mt-12 gap-4">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-gray-800 hover:bg-brand-primary hover:text-black transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === current
                          ? "bg-brand-primary"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                      onClick={() => {
                        setAutoplay(false);
                        setCurrent(index);
                      }}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-gray-800 hover:bg-brand-primary hover:text-black transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
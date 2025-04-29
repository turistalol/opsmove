"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Clock, MapPin, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-12 h-12 text-brand-primary" />,
    title: "Segurança em Primeiro Lugar",
    description:
      "Todos os motoristas são verificados e passam por análise de antecedentes. Rastreamento GPS e compartilhamento de viagem garantem sua segurança.",
  },
  {
    icon: <Clock className="w-12 h-12 text-brand-primary" />,
    title: "Chegada Rápida",
    description:
      "Nossa ampla rede de motoristas garante que você nunca espere muito. Tempo médio de espera menor que 5 minutos.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-brand-primary" />,
    title: "Vá para Qualquer Lugar",
    description:
      "Seja para atravessar a cidade ou ir para outra cidade, estamos presentes em mais de 50 cidades para te atender.",
  },
  {
    icon: <DollarSign className="w-12 h-12 text-brand-primary" />,
    title: "Preços Acessíveis",
    description:
      "Preços competitivos com estimativas transparentes antes da viagem. Sem preços dinâmicos em horários de pico.",
  },
];

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="features"
      className="section-padding bg-brand-light-gray py-24"
      ref={ref}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Por que escolher a <span className="text-brand-primary">OPS MOVE</span></h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Oferecemos a melhor experiência em transporte com recursos projetados para seu conforto, segurança e conveniência.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
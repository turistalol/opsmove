"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Smartphone, MapPin, Car, ThumbsUp, Play, Pause, Volume2, VolumeX } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="w-10 h-10 text-brand-primary" />,
    title: "Baixe o Aplicativo",
    description: "Instale o app OPS MOVE na App Store ou Google Play e crie sua conta em segundos.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-brand-primary" />,
    title: "Informe o Destino",
    description: "Digite ou selecione seu destino e escolha entre as opções de viagem disponíveis.",
  },
  {
    icon: <Car className="w-10 h-10 text-brand-primary" />,
    title: "Encontre seu Motorista",
    description: "Conectamos você ao motorista mais próximo, que chegará rapidamente.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-brand-primary" />,
    title: "Aproveite sua Viagem",
    description: "Relaxe e aproveite o trajeto. Avalie sua experiência ao chegar.",
  },
];

export function HowItWorks() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current && videoRef.current.hasAttribute('autoPlay')) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.warn("Autoplay prevented:", error);
        setIsPlaying(false); 
      });
      setIsMuted(videoRef.current.muted);
    }
  }, []);

  return (
    <section id="how-it-works" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Como a <span className="text-brand-primary">OPS MOVE</span> Funciona</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Pedir uma corrida é mais fácil do que nunca com nosso processo em 4 etapas
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Phone Mockup */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-xs"
            >
              <div className="relative mx-auto w-64 h-[550px] bg-black rounded-[3rem] shadow-xl overflow-hidden border-[14px] border-black">
                <div className="absolute top-0 w-full h-6 bg-black rounded-t-lg"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-full"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200">
                  <video
                    ref={videoRef}
                    src="/ops.mp4"
                    autoPlay
                    muted
                    loop
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 bg-black/50 p-2 rounded-full">
                    <button onClick={togglePlay} className="text-white hover:text-brand-primary transition-colors">
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button onClick={toggleMute} className="text-white hover:text-brand-primary transition-colors">
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-white rounded-full"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-brand-primary rounded-full opacity-20"></div>
              <div className="absolute -z-10 -top-10 -right-10 w-32 h-32 bg-brand-primary rounded-full opacity-20"></div>
            </motion.div>
          </div>

          {/* Steps */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="timeline-step flex gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-light-gray">
                      <span className="font-bold text-xl">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <div className="p-4 mb-2 inline-block rounded-lg bg-brand-light-gray">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
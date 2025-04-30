"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import DownloadButton from "@/components/ui/download-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0" style={{ zIndex: -10 }}>
        <Image 
          src="/bg.webp" 
          alt="Background da OPS MOVE"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
      </div>
      
      {/* Overlay/Filtro */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60" 
        style={{ zIndex: -5 }}
      ></div>

      <div className="container-custom relative z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white font-bold mb-4">
                Chegue em qualquer lugar com a{" "}
                <span className="text-brand-primary">OPS MOVE</span>
              </h1>
              <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0">
                Sua viagem rápida, segura e econômica está a um toque de distância
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <DownloadButton className="inline-block px-6 py-3 bg-brand-primary text-white rounded-lg shadow-md hover:bg-brand-primary/90 font-semibold text-lg transition-colors duration-300">
                  Baixar Aplicativo
                </DownloadButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/20 transition-colors"
                >
                  Seja um Motorista
                </Button>
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
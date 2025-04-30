"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Smartphone, Shield, Star, QrCode } from "lucide-react";

// Componentes de ícones personalizados
const AppleStoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50" fill="currentColor">
    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50" fill="currentColor">
    <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z" />
  </svg>
);

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-brand-primary" />,
    title: "Fácil de Usar",
    description: "Interface simples e intuitiva para pedir corridas",
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-primary" />,
    title: "Seguro",
    description: "Pagamentos e dados criptografados de ponta a ponta",
  },
  {
    icon: <Star className="w-6 h-6 text-brand-primary" />,
    title: "Bem Avaliado",
    description: "Mais de 4,8 estrelas nas lojas de aplicativos",
  },
  {
    icon: <QrCode className="w-6 h-6 text-brand-primary" />,
    title: "Configuração Rápida",
    description: "Comece a viajar em menos de 2 minutos",
  },
];

export function DownloadApp() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="download"
      ref={ref}
      className="section-padding bg-brand-light-gray relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary rounded-full opacity-5 translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Baixe o App da <span className="text-brand-primary">OPS MOVE</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tenha a melhor experiência em transporte com nosso aplicativo móvel. 
              Disponível para dispositivos iOS e Android.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://apps.apple.com/br/app/ops-move-passageiro/id6498920591"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl transition-transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleStoreIcon />
                <div className="text-left">
                  <div className="text-xs">Baixe na</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=br.com.client.uniaomototaxilagoadaprata&hl=pt_BR"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl transition-transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-xs">Disponível no</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-xs">
              <div className="relative mx-auto w-72 h-[600px] bg-black rounded-[3rem] shadow-xl overflow-hidden border-[14px] border-black">
                <div className="absolute top-0 w-full h-6 bg-black"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <Image
                  src="/interface.webp"
                  alt="Interface do App OPS MOVE"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
              </div>

              {/* QR Code - Com posicionamento responsivo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute right-2 bottom-2 sm:right-0 sm:-bottom-10 md:-right-10 md:-bottom-12 lg:-right-14 lg:-bottom-14 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg"
              >
                <div className="text-center">
                    <Image 
                      src="/qr-code.svg" 
                      alt="QR Code para download do app" 
                      width={72} 
                      height={72}
                      className="mx-auto mb-1 sm:mb-2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" 
                    />
                  <p className="text-[10px] sm:text-xs font-medium">Escaneie para Baixar</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-brand-primary rounded-full opacity-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-primary rounded-full opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
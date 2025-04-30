"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  DollarSign,
  Calendar,
  Shield,
  Car,
  Smartphone,
  FileCheck,
  ChevronDown,
  Star,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Headphones,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: <DollarSign className="w-12 h-12 text-[#FFC300]" />,
    title: "Ganhos Atraentes",
    description: "Fique com 100% do valor de cada corrida. Sem taxas sobre suas viagens, apenas uma mensalidade fixa para usar a plataforma.",
  },
  {
    icon: <Clock className="w-12 h-12 text-[#FFC300]" />,
    title: "Horários Flexíveis",
    description: "Trabalhe quando quiser e faça seu próprio horário. Você é o dono do seu tempo.",
  },
  {
    icon: <Shield className="w-12 h-12 text-[#FFC300]" />,
    title: "Suporte 24/7",
    description: "Assistência completa quando precisar, com equipe dedicada para te ajudar.",
  },
  {
    icon: <Wallet className="w-12 h-12 text-[#FFC300]" />,
    title: "Pagamento Mensal",
    description: "Pague um valor mensal único e previsível para ter acesso total à plataforma. Simples e sem surpresas.",
  },
];

const steps = [
  {
    icon: <Smartphone className="w-8 h-8 text-[#FFC300]" />,
    title: "Cadastro Rápido",
    description: "Preencha seus dados básicos e comece o processo",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#FFC300]" />,
    title: "Envio de Documentos",
    description: "Envie sua documentação para análise",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-[#FFC300]" />,
    title: "Aprovação",
    description: "Aguarde a verificação dos seus documentos",
  },
  {
    icon: <MapPin className="w-8 h-8 text-[#FFC300]" />,
    title: "Comece a Dirigir",
    description: "Aproveite sua jornada como motorista parceiro",
  },
];

const requirements = [
  {
    icon: <Car className="w-8 h-8 text-[#FFC300]" />,
    title: "Carro em Bom Estado",
    items: [
      "Máximo 10 anos de fabricação",
      "4 portas",
      "Ar condicionado",
      "Documentação em dia",
    ],
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#FFC300]" />,
    title: "Documentação",
    items: [
      "CNH definitiva com EAR",
      "Documento do veículo",
      "RG e CPF",
      "Foto de perfil recente",
    ],
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#FFC300]" />,
    title: "Equipamento",
    items: [
      "Smartphone Android 6.0+",
      "Plano de dados ativo",
      "Suporte veicular",
    ],
  },
];

const features = [
  {
    icon: <Shield className="w-8 h-8 text-[#FFC300]" />,
    title: "Segurança",
    description: "Sistema de proteção e monitoramento 24h",
  },
  {
    icon: <Headphones className="w-8 h-8 text-[#FFC300]" />,
    title: "Suporte Dedicado",
    description: "Canal exclusivo para motoristas parceiros",
  },
  {
    icon: <Wallet className="w-8 h-8 text-[#FFC300]" />,
    title: "Ganhos Extras",
    description: "Promoções especiais no app com prêmios para motoristas e clientes participantes.",
  },
];

const faqs = [
  {
    question: "Quanto posso ganhar como motorista parceiro?",
    answer: "Os ganhos variam de acordo com as horas trabalhadas e região. Em média, motoristas que trabalham 8h por dia podem ganhar entre R$2.500 a R$5.000 por mês.",
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não é necessária experiência prévia como motorista de aplicativo. O importante é ter CNH com EAR válida e atender aos requisitos básicos.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Com a OPS MOVE, o valor da corrida é 100% seu! Para ter acesso completo à plataforma e todas as suas vantagens, você paga apenas uma mensalidade fixa e transparente. Acompanhe seus ganhos totais diretamente pelo app.",
  },
  {
    question: "Posso trabalhar em outras plataformas?",
    answer: "Sim! Você tem total liberdade para trabalhar em outros aplicativos. Não exigimos exclusividade.",
  },
  {
    question: "Quanto tempo leva para ser aprovado?",
    answer: "O processo de aprovação geralmente leva de 24 a 48 horas após o envio de toda a documentação necessária.",
  },
];

export default function DriverRecruitment() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho interesse em me tornar um motorista parceiro da OPS MOVE."
  );
  const whatsappLink = `https://wa.me/5537998020707?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Motorista OPS MOVE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container-custom relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="mb-6">
              Seja um Motorista <span className="text-[#FFC300]">OPS MOVE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Ganhe dinheiro no seu tempo, seja seu próprio chefe e faça parte de uma
              das maiores plataformas de mobilidade do Brasil
            </p>
            <Button
              size="lg"
              className="bg-[#FFC300] text-black hover:bg-[#FFD700] font-medium text-lg px-8 py-6 rounded-2xl"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Começar Agora via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">
              Por que escolher a <span className="text-[#FFC300]">OPS MOVE</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos as melhores condições para nossos motoristas parceiros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-7 lg:p-9 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-row sm:flex-col items-start sm:items-center"
              >
                <div className="mr-5 sm:mr-0 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-50 rounded-full flex items-center justify-center border border-[#FFC300]/20">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex-1 text-left sm:text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Como Começar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Processo simples e rápido para você começar a dirigir
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col"
                >
                  <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center flex-1 flex flex-col items-center justify-between border border-gray-100">
                    <div className="relative w-full">
                      <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#FFC300] text-black flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#FFC300]/20">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                      <h3 className="text-lg lg:text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm lg:text-base">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Conectores para desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 items-center">
                      <div className="w-6 h-0.5 bg-[#FFC300]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#FFC300]"></div>
                    </div>
                  )}
                  
                  {/* Conectores para mobile e tablet */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-4 mb-2">
                      <div className="w-0.5 h-8 bg-[#FFC300]"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Botão "Começar" para mobile */}
            <div className="mt-12 text-center md:hidden">
              <Button
                size="lg"
                className="bg-[#FFC300] text-black hover:bg-[#FFD700] font-medium px-8 py-4 rounded-xl shadow-md"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Requisitos para se tornar um motorista</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confira o que você precisa para começar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="mb-6">{req.icon}</div>
                <h3 className="text-xl font-bold mb-4">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-[#FFC300] mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Benefícios Exclusivos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vantagens especiais para nossos motoristas parceiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-7 lg:p-9 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-row sm:flex-col items-start sm:items-center h-full"
              >
                <div className="mr-5 sm:mr-0 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-50 rounded-full flex items-center justify-center border-2 border-[#FFC300]/20 text-[#FFC300]">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1 text-left sm:text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Dúvidas Frequentes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as principais dúvidas sobre ser um motorista parceiro
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left font-bold text-base sm:text-lg flex items-center [&[data-state=open]>div>svg]:rotate-180 [&[data-state=open]]:bg-gray-50/80 [&>svg]:hidden">
                      <div className="flex-1 pr-4">{faq.question}</div>
                      <div className="flex-shrink-0 text-[#FFC300]">
                        <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-5 text-gray-600 text-sm sm:text-base border-t border-gray-100">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            
            {/* Botão de "Ver Mais Perguntas" para Mobile */}
            <div className="mt-10 text-center md:hidden">
              <Button
                variant="outline"
                className="border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300]/5 font-medium"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Tem outras dúvidas? Fale conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A1F36] text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">
            Pronto para começar sua jornada com a{" "}
            <span className="text-[#FFC300]">OPS MOVE</span>?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de motoristas parceiros e comece a ganhar dinheiro
            ainda hoje
          </p>
          <Button
            size="lg"
            className="bg-[#FFC300] text-black hover:bg-[#FFD700] font-medium text-lg px-8 py-6 rounded-2xl"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Começar Agora via WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
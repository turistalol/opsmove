"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, UserCheck, MapPin, Bell, Clock, Users, Moon, Coffee } from "lucide-react";

const securityFeatures = [
  {
    icon: <Clock className="w-12 h-12 text-brand-primary" />,
    title: "Trabalho & Escritório",
    description: "Chegue ao trabalho com tranquilidade. Monitore sua viagem e compartilhe o trajeto com colegas.",
  },
  {
    icon: <Coffee className="w-12 h-12 text-brand-primary" />,
    title: "Compromissos Diários",
    description: "Consultas, reuniões ou compras. Viaje com a certeza de um serviço verificado e confiável.",
  },
  {
    icon: <Users className="w-12 h-12 text-brand-primary" />,
    title: "Eventos Sociais",
    description: "Encontros com amigos, festas ou shows. Aproveite sem preocupações com sua segurança.",
  },
  {
    icon: <Moon className="w-12 h-12 text-brand-primary" />,
    title: "Vida Noturna",
    description: "Bares, restaurantes ou baladas. Volte para casa em segurança a qualquer hora.",
  },
];

const securityProtocols = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Verificação Rigorosa",
    description: "Todos os motoristas passam por verificação de antecedentes e documentação.",
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Perfis Verificados",
    description: "Fotos e informações dos motoristas sempre atualizadas e validadas.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Monitoramento GPS",
    description: "Acompanhamento em tempo real de todas as viagens.",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Botão de Emergência",
    description: "Acesso rápido a contatos de emergência e suporte 24/7.",
  },
];

export function Security() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="security" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">
              Sua Segurança é Nossa <span className="text-brand-primary">Prioridade</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Viaje com tranquilidade sabendo que cada aspecto da sua experiência foi
              projetado pensando na sua segurança.
            </p>
          </motion.div>
        </div>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Protocols */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-brand-light-gray rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Protocolos de Segurança
            </h3>
            <p className="text-gray-600">
              Implementamos medidas rigorosas para garantir sua segurança em cada viagem
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityProtocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  {protocol.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{protocol.title}</h4>
                <p className="text-gray-600">{protocol.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
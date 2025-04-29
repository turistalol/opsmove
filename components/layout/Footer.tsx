import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image 
                  src="/logo.jpeg" 
                  alt="OPS MOVE Logo" 
                  fill 
                  className="object-contain rounded"
                />
              </div>
              <span className="font-bold text-xl text-white">OPS MOVE</span>
            </div>
            <p className="text-gray-400 mb-4">
              Seu serviço de transporte rápido, seguro e econômico. Disponível 24 horas por dia para levar você aonde precisar ir.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.facebook.com/people/Ops-Move/61569724742740/" icon={<Facebook size={20} />} label="Facebook" target="_blank" rel="noopener noreferrer" />
              <SocialLink href="https://www.instagram.com/opsmove.mobi/" icon={<Instagram size={20} />} label="Instagram" target="_blank" rel="noopener noreferrer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="footer-link text-gray-400">Início</Link></li>
              <li><Link href="#features" className="footer-link text-gray-400">Recursos</Link></li>
              <li><Link href="#how-it-works" className="footer-link text-gray-400">Como Funciona</Link></li>
              <li><Link href="#security" className="footer-link text-gray-400">Segurança</Link></li>
              <li><Link href="#testimonials" className="footer-link text-gray-400">Depoimentos</Link></li>
              <li><Link href="#download" className="footer-link text-gray-400">Download</Link></li>
              <li><Link href="/seja-um-motorista" className="footer-link text-gray-400">Seja um Motorista</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-heading text-white">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Avenida Brasil, 869</li>
              <li>Lagoa da Prata, MG, 35592-268</li>
              <li>+55 (37) 99802-0707</li>
              <li>opsmoveapp@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} OPS MOVE. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-de-privacidade" className="hover:text-gray-300">Política de Privacidade</Link>
              <Link href="/termos-de-servico" className="hover:text-gray-300">Termos de Serviço</Link>
              <Link href="/politica-de-cookies" className="hover:text-gray-300">Política de Cookies</Link>
            </div>
          </div>
          <div className="mt-4 text-sm">
            Desenvolvido por <a href="https://f5.marketing" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">f5.marketing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ 
  href, 
  icon, 
  label,
  target,
  rel
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a 
      href={href} 
      aria-label={label}
      target={target}
      rel={rel}
      className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-black transition-colors duration-300"
    >
      {icon}
    </a>
  );
}
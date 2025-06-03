"use client";

import React, { useState, useEffect } from 'react';

// URLs das lojas de aplicativos - Usando as URLs reais fornecidas
const APPLE_STORE_URL = 'https://apps.apple.com/br/app/ops-move/id6746564555';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=br.com.client.uniaomototaxilagoadaprata&hl=pt_BR';
const FALLBACK_URL = '#download'; // Redirecionando para a seção DownloadApp

interface DownloadButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  className = "", 
  children = "Baixar App"
}) => {
  const [downloadUrl, setDownloadUrl] = useState<string>(FALLBACK_URL); // Inicia com fallback

  useEffect(() => {
    // Executa apenas no lado do cliente (browser)
    if (typeof window !== 'undefined' && navigator.userAgent) {
      const userAgent = navigator.userAgent.toLowerCase();

      // Detecta iOS (iPhone, iPad, iPod)
      if (/iphone|ipad|ipod/.test(userAgent)) {
        setDownloadUrl(APPLE_STORE_URL);
      }
      // Detecta Android
      else if (/android/.test(userAgent)) {
        setDownloadUrl(GOOGLE_PLAY_URL);
      }
      // Outros casos (Desktop, etc.) usarão o FALLBACK_URL definido inicialmente
    }
  }, []); // Array de dependências vazio para rodar apenas na montagem

  return (
    <a
      href={downloadUrl}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default DownloadButton; 
'use client'; // Obrigatório para App Router, pois usa useEffect e APIs do navegador

import React, { useEffect } from 'react';
// Opcional: importar useRouter se precisar redirecionar internamente para o fallback
// import { useRouter } from 'next/navigation'; // Para App Router
// import { useRouter } from 'next/router'; // Para Pages Router

// --- URLs de Destino (NÃO ALTERAR) ---
const APPLE_STORE_URL = 'https://apps.apple.com/br/app/ops-move-passageiro/id6498920591';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=br.com.client.uniaomototaxilagoadaprata&hl=pt_BR';
const FALLBACK_URL = '/#download'; // Rota interna para fallback (seção download da página inicial)
// --- FIM DAS URLs ---

const QRCodeRedirectPage: React.FC = () => {
  // Opcional: const router = useRouter(); // Para usar router.replace(FALLBACK_URL);

  useEffect(() => {
    // Executa apenas no lado do cliente (browser)
    if (typeof window !== 'undefined' && navigator.userAgent) {
      const userAgent = navigator.userAgent.toLowerCase();
      let targetUrl = FALLBACK_URL; // Define fallback como padrão

      // Detecta iOS (iPhone, iPad, iPod)
      if (/iphone|ipad|ipod/.test(userAgent)) {
        targetUrl = APPLE_STORE_URL;
      }
      // Detecta Android
      else if (/android/.test(userAgent)) {
        targetUrl = GOOGLE_PLAY_URL;
      }

      // Redireciona o navegador imediatamente, substituindo a página atual no histórico
      // Isso melhora a experiência do usuário ao usar o botão "voltar" do navegador
      window.location.replace(targetUrl);

      // Alternativa (menos ideal para este caso, mas possível):
      // window.location.href = targetUrl;

      // Alternativa usando Next Router (apenas se targetUrl for uma rota interna):
      // router.replace(targetUrl);

    }
  }, []); // Array de dependências vazio para rodar apenas na montagem inicial

  // Renderiza um conteúdo mínimo enquanto o JavaScript executa o redirecionamento.
  // Isso é útil caso haja um pequeno delay ou se o JS estiver desabilitado (raro).
  // Estilos inline simples são suficientes aqui, ou use classes Tailwind básicas se preferir.
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
     }}>
      <h1>Redirecionando...</h1>
      <p style={{ marginTop: '10px' }}>Você será redirecionado para a loja de aplicativos apropriada.</p>
      {/* Fallback manual caso o JS falhe */}
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#555' }}>
        <p>Se o redirecionamento não funcionar:</p>
        <p>
          <a href={APPLE_STORE_URL} style={{ color: '#007aff', marginRight: '10px' }}>Baixar para iOS</a>
          |
          <a href={GOOGLE_PLAY_URL} style={{ color: '#34a853', marginLeft: '10px' }}>Baixar para Android</a>
        </p>
        <p style={{marginTop: '15px'}}>
            <a href={FALLBACK_URL} style={{ color: '#888' }}>Voltar ao site</a>
        </p>
      </div>
    </div>
  );
};

export default QRCodeRedirectPage; 
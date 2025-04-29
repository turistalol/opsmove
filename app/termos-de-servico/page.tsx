"use client";

import React from "react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-4xl mx-auto py-12 px-4 md:px-8">
        <div className="prose max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Termos de Serviço - OPS MOVE</h1>
          
          <p className="font-semibold mb-8">
            <strong>Última Atualização:</strong> [Inserir Data da Última Atualização]
          </p>

          <p className="mb-6">
            Bem-vindo(a) à OPS MOVE!
          </p>

          <p className="mb-6">
            Estes Termos de Serviço ("Termos") regem o seu acesso e uso da plataforma tecnológica ("Plataforma") oferecida pela <strong>OPS MOVE</strong> ([Inserir Razão Social Completa], CNPJ nº [Inserir CNPJ], com sede em [Inserir Endereço Completo]), doravante denominada "OPS MOVE", que conecta Usuários Passageiros ("Passageiros") a Usuários Motoristas Parceiros ("Motoristas Parceiros") que oferecem serviços de transporte remunerado privado individual de passageiros ("Serviços de Transporte").
          </p>

          <p className="mb-6 font-bold uppercase">
            AO ACESSAR OU UTILIZAR A PLATAFORMA OPS MOVE, VOCÊ DECLARA TER LIDO, ENTENDIDO E CONCORDADO INTEGRALMENTE COM ESTES TERMOS E COM A NOSSA <Link href="/politica-de-privacidade" className="text-blue-600 hover:underline">POLÍTICA DE PRIVACIDADE</Link>, QUE É PARTE INTEGRANTE DESTE DOCUMENTO.
          </p>

          <p className="mb-10 font-bold uppercase">
            SE VOCÊ NÃO CONCORDAR COM ESTES TERMOS, NÃO ACESSE OU UTILIZE A PLATAFORMA.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objeto</h2>
          <p className="mb-3">
            1.1. A OPS MOVE oferece uma Plataforma tecnológica que atua como <strong>intermediária</strong>, licenciando o uso de seu software (website e aplicativo móvel) para facilitar a conexão entre Passageiros que buscam Serviços de Transporte e Motoristas Parceiros dispostos a prestar tais serviços de forma independente.
          </p>
          <p className="mb-3">
            1.2. <strong>A OPS MOVE NÃO PRESTA SERVIÇOS DE TRANSPORTE.</strong> A OPS MOVE não possui frota de veículos, não emprega Motoristas Parceiros e não se responsabiliza pela execução do Serviço de Transporte em si, que é realizado exclusivamente pelos Motoristas Parceiros, sob sua inteira responsabilidade. A relação entre Passageiro e Motorista Parceiro é estabelecida diretamente entre eles através da intermediação da Plataforma.
          </p>
          <p className="mb-8">
            1.3. A OPS MOVE se reserva o direito de modificar, suspender ou descontinuar, temporária ou permanentemente, a Plataforma ou qualquer serviço associado a ela, com ou sem aviso prévio, nos limites permitidos pela legislação aplicável.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definições</h2>
          <p className="mb-4">
            Para os fins destes Termos, as seguintes palavras terão os significados abaixo:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-2"><strong>Plataforma:</strong> O website e o aplicativo móvel da OPS MOVE.</li>
            <li className="mb-2"><strong>Usuário:</strong> Termo genérico para Passageiros e Motoristas Parceiros.</li>
            <li className="mb-2"><strong>Passageiro:</strong> Pessoa física que se cadastra na Plataforma para solicitar Serviços de Transporte.</li>
            <li className="mb-2"><strong>Motorista Parceiro:</strong> Pessoa física, profissional autônomo, que se cadastra na Plataforma para oferecer Serviços de Transporte utilizando veículo próprio ou legalmente possuído, cumprindo os requisitos legais e da Plataforma.</li>
            <li className="mb-2"><strong>Serviços de Transporte:</strong> O serviço de transporte remunerado privado individual de passageiros prestado pelo Motorista Parceiro ao Passageiro, intermediado pela Plataforma.</li>
            <li className="mb-2"><strong>Conta:</strong> O perfil único e intransferível criado pelo Usuário para acessar a Plataforma.</li>
            <li className="mb-2"><strong>Tarifa:</strong> O valor cobrado do Passageiro pelo Serviço de Transporte, calculado pela Plataforma com base em diversos fatores (distância, tempo, demanda, etc.) e repassado ao Motorista Parceiro após dedução da taxa de serviço da OPS MOVE.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cadastro e Conta do Usuário</h2>
          <p className="mb-3">
            3.1. Para utilizar a Plataforma, o Usuário deve se cadastrar, criando uma Conta pessoal e intransferível. O Usuário deve ter pelo menos 18 (dezoito) anos de idade e possuir plena capacidade civil.
          </p>
          <p className="mb-3">
            3.2. O Usuário se compromete a fornecer informações verdadeiras, exatas, atuais e completas durante o processo de cadastro e a mantê-las atualizadas. A OPS MOVE não se responsabiliza por informações incorretas ou desatualizadas fornecidas pelo Usuário.
          </p>
          <p className="mb-3">
            3.3. <strong>Requisitos Específicos para Motoristas Parceiros:</strong> Além do item 3.2, os Motoristas Parceiros devem cumprir requisitos adicionais, incluindo, mas não se limitando a:
          </p>
          <ul className="list-disc pl-8 mb-3">
            <li className="mb-1">Possuir Carteira Nacional de Habilitação (CNH) válida, com a observação "Exerce Atividade Remunerada" (EAR).</li>
            <li className="mb-1">Apresentar Certidão Negativa de Antecedentes Criminais.</li>
            <li className="mb-1">Possuir veículo que atenda aos padrões de segurança, conforto e idade definidos pela OPS MOVE e pela legislação local.</li>
            <li className="mb-1">Possuir seguro de Acidentes Pessoais a Passageiros (APP) e seguro de Responsabilidade Civil Facultativa de Veículos (RCVF).</li>
            <li className="mb-1">Cumprir todas as exigências legais e regulatórias municipais e federais para o exercício da atividade (como a Lei nº 13.640/2018 e regulamentações locais).</li>
          </ul>
          <p className="mb-3">
            3.4. A OPS MOVE se reserva o direito de verificar as informações fornecidas e de recusar ou cancelar o cadastro de qualquer Usuário que não cumpra estes Termos ou os requisitos legais, ou que forneça informações falsas, a seu exclusivo critério.
          </p>
          <p className="mb-8">
            3.5. O Usuário é o único responsável pela segurança de sua senha e por todas as atividades que ocorrerem em sua Conta. Qualquer suspeita de uso não autorizado deve ser imediatamente comunicada à OPS MOVE.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Obrigações dos Usuários</h2>
          <p className="mb-3">
            4.1. <strong>Obrigações Gerais (Passageiros e Motoristas Parceiros):</strong>
          </p>
          <ul className="list-disc pl-8 mb-3">
            <li className="mb-1">Utilizar a Plataforma de forma ética, legal e de acordo com estes Termos.</li>
            <li className="mb-1">Não utilizar a Plataforma para fins ilícitos, fraudulentos ou que violem direitos de terceiros.</li>
            <li className="mb-1">Não se passar por outra pessoa ou entidade.</li>
            <li className="mb-1">Manter o respeito e a urbanidade nas interações com outros Usuários e com a equipe da OPS MOVE.</li>
            <li className="mb-1">Não realizar atos que possam danificar, sobrecarregar ou prejudicar o funcionamento da Plataforma.</li>
            <li className="mb-1">Cumprir a Política de Privacidade.</li>
          </ul>
          <p className="mb-3">
            4.2. <strong>Obrigações Específicas dos Passageiros:</strong>
          </p>
          <ul className="list-disc pl-8 mb-3">
            <li className="mb-1">Fornecer informações precisas de local de embarque e destino.</li>
            <li className="mb-1">Aguardar o Motorista Parceiro no local indicado.</li>
            <li className="mb-1">Pagar a Tarifa devida pelo Serviço de Transporte através dos meios disponibilizados na Plataforma.</li>
            <li className="mb-1">Utilizar o cinto de segurança durante toda a viagem.</li>
            <li className="mb-1">Não transportar animais (exceto cão-guia ou com consentimento prévio do Motorista Parceiro), produtos ilícitos, perigosos ou em desacordo com a lei.</li>
            <li className="mb-1">Zelar pela conservação do veículo do Motorista Parceiro. O Passageiro poderá ser responsabilizado por danos ou sujeira excessiva causada por ele ou seus acompanhantes (Taxa de Limpeza).</li>
            <li className="mb-1">Respeitar o Motorista Parceiro.</li>
          </ul>
          <p className="mb-3">
            4.3. <strong>Obrigações Específicas dos Motoristas Parceiros:</strong>
          </p>
          <ul className="list-disc pl-8 mb-8">
            <li className="mb-1">Prestar o Serviço de Transporte de forma segura, profissional, pontual e cortês.</li>
            <li className="mb-1">Manter o veículo limpo, seguro e em conformidade com as leis de trânsito e regulamentações aplicáveis.</li>
            <li className="mb-1">Possuir e manter válidos todos os documentos e seguros exigidos por lei e pela OPS MOVE (CNH com EAR, CRLV, Seguro APP, Seguro RCFV, etc.).</li>
            <li className="mb-1">Cumprir todas as leis de trânsito.</li>
            <li className="mb-1">Não utilizar o aplicativo enquanto dirige de forma que comprometa a segurança.</li>
            <li className="mb-1">Cobrar apenas a Tarifa calculada pela Plataforma, acrescida de eventuais pedágios ou taxas extras legítimas e previamente informadas (se aplicável).</li>
            <li className="mb-1">Não discriminar Passageiros por qualquer motivo.</li>
            <li className="mb-1">Não utilizar a Plataforma para fins diversos da prestação do Serviço de Transporte intermediado pela OPS MOVE.</li>
            <li className="mb-1">Ser o único responsável por suas obrigações fiscais, trabalhistas (como autônomo) e previdenciárias decorrentes da sua atividade.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pagamento e Tarifas</h2>
          <p className="mb-3">
            5.1. O Passageiro concorda em pagar a Tarifa pelos Serviços de Transporte solicitados através da Plataforma. A Tarifa é calculada com base em fatores como distância estimada, tempo estimado, tarifa base, preço dinâmico (em momentos de alta demanda), pedágios e outras taxas aplicáveis.
          </p>
          <p className="mb-3">
            5.2. O Passageiro será informado sobre a estimativa da Tarifa antes de confirmar a solicitação da viagem. A Tarifa final pode variar devido a fatores como trânsito real, mudança de rota, paradas adicionais, etc.
          </p>
          <p className="mb-3">
            5.3. O pagamento da Tarifa é processado pela OPS MOVE através de um provedor de serviços de pagamento parceiro. A OPS MOVE não armazena dados completos de cartões de crédito/débito.
          </p>
          <p className="mb-3">
            5.4. A OPS MOVE cobrará uma taxa de serviço ("Taxa OPS MOVE") do Motorista Parceiro, calculada como um percentual da Tarifa de cada viagem realizada através da Plataforma. O valor repassado ao Motorista Parceiro já terá a Taxa OPS MOVE deduzida.
          </p>
          <p className="mb-3">
            5.5. <strong>Promoções e Códigos:</strong> A OPS MOVE pode, a seu critério, oferecer códigos promocionais ou descontos, sujeitos a termos e condições específicos.
          </p>
          <p className="mb-3">
            5.6. <strong>Taxa de Cancelamento:</strong> Poderá ser cobrada uma taxa de cancelamento do Passageiro caso cancele a viagem após um determinado período ou se não estiver no local de embarque. Motoristas Parceiros também podem estar sujeitos a penalidades por cancelamentos excessivos ou inadequados.
          </p>
          <p className="mb-8">
            5.7. <strong>Taxa de Limpeza:</strong> Caso o Passageiro cause sujeira excessiva ou danos ao veículo, o Motorista Parceiro poderá solicitar, mediante comprovação (fotos), o reembolso de uma taxa de limpeza/reparo razoável, que será cobrada do Passageiro pela Plataforma.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Relacionamento entre as Partes</h2>
          <p className="mb-3">
            6.1. <strong>Inexistência de Vínculo Empregatício:</strong> Estes Termos não estabelecem qualquer vínculo empregatício, sociedade, franquia ou relação de agência entre a OPS MOVE e os Motoristas Parceiros. Os Motoristas Parceiros são profissionais autônomos, independentes, que utilizam a Plataforma como ferramenta para encontrar Passageiros.
          </p>
          <p className="mb-8">
            6.2. <strong>Autonomia do Motorista Parceiro:</strong> O Motorista Parceiro tem total liberdade para decidir quando, onde e por quanto tempo utilizará a Plataforma, bem como para aceitar ou recusar solicitações de viagem.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Propriedade Intelectual</h2>
          <p className="mb-3">
            7.1. Todos os direitos de propriedade intelectual relativos à Plataforma (incluindo software, marcas, logos, layout, textos, gráficos, dados) pertencem exclusivamente à OPS MOVE ou aos seus licenciadores.
          </p>
          <p className="mb-3">
            7.2. A OPS MOVE concede aos Usuários uma licença limitada, não exclusiva, revogável e intransferível para acessar e usar a Plataforma exclusivamente para os fins previstos nestes Termos.
          </p>
          <p className="mb-8">
            7.3. É vedado aos Usuários copiar, modificar, distribuir, vender, alugar, sublicenciar, fazer engenharia reversa ou tentar extrair o código fonte da Plataforma.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitação de Responsabilidade e Isenções</h2>
          <p className="mb-3">
            8.1. <strong>Natureza Intermediária:</strong> A OPS MOVE atua como mera intermediária. <strong>A OPS MOVE NÃO SE RESPONSABILIZA PELA QUALIDADE, SEGURANÇA, PONTUALIDADE OU LEGALIDADE DOS SERVIÇOS DE TRANSPORTE PRESTADOS PELOS MOTORISTAS PARCEIROS, NEM PELA CONDUTA DE PASSAGEIROS OU MOTORISTAS PARCEIROS.</strong>
          </p>
          <p className="mb-3">
            8.2. <strong>Responsabilidade do Motorista Parceiro:</strong> O Motorista Parceiro é o único e exclusivo responsável por quaisquer danos, prejuízos, infrações ou acidentes ocorridos durante a prestação do Serviço de Transporte, incluindo danos a Passageiros, a terceiros ou ao próprio veículo. É responsabilidade do Motorista Parceiro manter seguros adequados e válidos.
          </p>
          <p className="mb-3">
            8.3. <strong>Disponibilidade da Plataforma:</strong> A OPS MOVE não garante que a Plataforma estará disponível ininterruptamente ou livre de erros, falhas ou vírus. A OPS MOVE não se responsabiliza por eventuais indisponibilidades ou falhas técnicas.
          </p>
          <p className="mb-3">
            8.4. <strong>Limitação Geral:</strong> Na extensão máxima permitida pela lei aplicável, a responsabilidade total da OPS MOVE por quaisquer reclamações decorrentes ou relacionadas a estes Termos ou ao uso da Plataforma (seja por contrato, ato ilícito ou outra forma) estará limitada ao valor das Taxas OPS MOVE pagas por você (se Motorista Parceiro) ou pagas por você em Tarifas (se Passageiro) nos 6 (seis) meses anteriores ao evento que deu origem à reclamação, ou R$ 100,00 (cem reais), o que for maior.
          </p>
          <p className="mb-3">
            8.5. <strong>Danos Indiretos:</strong> Em nenhuma hipótese a OPS MOVE será responsável por danos indiretos, incidentais, especiais, exemplares, punitivos ou consequenciais, incluindo lucros cessantes, perda de dados, danos morais ou danos materiais relacionados, associados ou decorrentes do uso da Plataforma ou dos Serviços de Transporte, mesmo que a OPS MOVE tenha sido alertada sobre a possibilidade de tais danos.
          </p>
          <p className="mb-8">
            8.6. Estas limitações não têm por objetivo restringir responsabilidades que não possam ser excluídas ou limitadas de acordo com a legislação brasileira aplicável, como as previstas no Código de Defesa do Consumidor em relação à falha na prestação do serviço de intermediação da Plataforma em si.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indenização</h2>
          <p className="mb-8">
            O Usuário concorda em indenizar, defender e isentar a OPS MOVE, seus diretores, funcionários e agentes de todas e quaisquer reclamações, perdas, responsabilidades, danos, custos e despesas (incluindo honorários advocatícios) decorrentes ou relacionados a: (i) seu uso da Plataforma ou dos Serviços de Transporte obtidos através dela; (ii) sua violação destes Termos; (iii) a violação de direitos de terceiros, incluindo outros Usuários; (iv) no caso de Motoristas Parceiros, qualquer aspecto relacionado à prestação do Serviço de Transporte, incluindo acidentes ou infrações.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Suspensão e Cancelamento da Conta</h2>
          <p className="mb-3">
            10.1. A OPS MOVE pode, a seu exclusivo critério, suspender ou cancelar permanentemente a Conta de qualquer Usuário, sem aviso prévio, caso haja violação destes Termos, da Política de Privacidade, da legislação aplicável, suspeita de fraude, conduta inadequada, risco à segurança de outros Usuários ou da Plataforma, ou por inatividade prolongada.
          </p>
          <p className="mb-3">
            10.2. O Usuário pode solicitar o cancelamento de sua Conta a qualquer momento através das funcionalidades da Plataforma ou entrando em contato com o suporte.
          </p>
          <p className="mb-8">
            10.3. O cancelamento da Conta não isenta o Usuário de quaisquer obrigações pendentes, como pagamentos devidos. A retenção de dados após o cancelamento seguirá o disposto na Política de Privacidade e na legislação.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modificações nos Termos de Serviço</h2>
          <p className="mb-3">
            11.1. A OPS MOVE reserva-se o direito de modificar estes Termos a qualquer momento. Quaisquer alterações entrarão em vigor após a publicação da versão atualizada na Plataforma ou mediante notificação ao Usuário (por e-mail ou notificação no app).
          </p>
          <p className="mb-8">
            11.2. É responsabilidade do Usuário revisar periodicamente estes Termos. O uso continuado da Plataforma após a publicação das alterações constituirá aceitação dos novos Termos. Caso não concorde com as alterações, o Usuário deverá cessar o uso da Plataforma e cancelar sua Conta.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Comunicações</h2>
          <p className="mb-8">
            O Usuário concorda que a OPS MOVE poderá enviar comunicações relacionadas à Plataforma e aos Serviços (avisos, atualizações, informações sobre a conta, promoções) através de notificações no aplicativo, e-mail, SMS ou outros meios eletrônicos para os contatos fornecidos no cadastro. É responsabilidade do Usuário manter seus dados de contato atualizados.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Lei Aplicável e Foro</h2>
          <p className="mb-3">
            13.1. Estes Termos são regidos e interpretados exclusivamente segundo as leis da República Federativa do Brasil.
          </p>
          <p className="mb-3">
            13.2. Fica eleito o foro da Comarca de [Inserir Cidade da Sede da OPS MOVE], Estado de [Inserir Estado], para dirimir quaisquer controvérsias oriundas destes Termos, renunciando as partes a qualquer outro, por mais privilegiado que seja.
          </p>
          <p className="mb-8">
            13.3. O disposto no item 13.2 não prejudica o direito do Passageiro, na condição de consumidor, de ajuizar eventual ação em seu próprio domicílio, conforme garantido pelo Código de Defesa do Consumidor.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Disposições Gerais</h2>
          <p className="mb-3">
            14.1. <strong>Integralidade:</strong> Estes Termos, juntamente com a Política de Privacidade, constituem o acordo integral entre o Usuário e a OPS MOVE com relação ao seu objeto.
          </p>
          <p className="mb-3">
            14.2. <strong>Autonomia das Cláusulas (Severability):</strong> Se qualquer disposição destes Termos for considerada inválida ou inexequível, tal disposição será limitada ou eliminada na medida mínima necessária, e as disposições restantes permanecerão em pleno vigor e efeito.
          </p>
          <p className="mb-3">
            14.3. <strong>Não Renúncia (Waiver):</strong> A falha da OPS MOVE em exercer ou fazer cumprir qualquer direito ou disposição destes Termos não constituirá uma renúncia a tal direito ou disposição.
          </p>
          <p className="mb-8">
            14.4. <strong>Cessão (Assignment):</strong> O Usuário não pode ceder ou transferir estes Termos ou quaisquer direitos aqui concedidos sem o consentimento prévio por escrito da OPS MOVE. A OPS MOVE pode ceder estes Termos sem restrições.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contato</h2>
          <p className="mb-8">
            Em caso de dúvidas sobre estes Termos de Serviço, entre em contato com a OPS MOVE através do e-mail [Inserir E-mail de Suporte/Contato] ou pela seção de Ajuda/Suporte na Plataforma.
          </p>

          <div className="border-t pt-8 mt-12">
            <p className="font-bold">OPS MOVE</p>
            <p>[Inserir Razão Social Completa]</p>
            <p>CNPJ: [Inserir CNPJ]</p>
            <p>Endereço: [Inserir Endereço Completo]</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
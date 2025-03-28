// src/pages/Services.jsx
import React from "react";
import "./Services.css"; // make sure to create and import this CSS file

export default function Services() {
  return (
    <div className="services-container">
      <header>
        <h1>Serviços da Plano B</h1>
        <p>Especializada em educação e segurança relacionadas ao Bitcoin</p>
      </header>

      <section className="card fadeInUp delay-1">
        <h2>
          <span className="icon" role="img" aria-label="Oferta">🛟</span> O que a Plano B oferece
        </h2>
        <p>
          A Plano B é uma empresa especializada em educação e segurança relacionadas ao Bitcoin. Seu objetivo principal é ajudar as pessoas a compreenderem melhor essa tecnologia revolucionária e a protegerem seus investimentos de forma eficaz.
        </p>
        <ul>
          <li>
            <strong>Educação sobre Bitcoin:</strong> Explicamos de maneira simples o que é o Bitcoin, como funciona e para que serve.
          </li>
          <li>
            <strong>Consultoria em segurança:</strong> Ensinamos as melhores práticas para guardar seus bitcoins de forma segura.
          </li>
          <li>
            <strong>Parceria com a Liana Wallet:</strong> Oferecemos soluções avançadas para proteção de ativos digitais.
          </li>
        </ul>
      </section>

      <section className="card fadeInUp delay-2">
        <h2>
          <span className="icon" role="img" aria-label="Recuperação">🔐</span> Planos de recuperação e herança
        </h2>
        <p>
          Um dos principais diferenciais da Plano B é o foco em planos de recuperação e herança para bitcoins. Através da parceria com a Liana Wallet, oferecemos:
        </p>
        <ul>
          <li>
            <strong>Plano de recuperação:</strong> Ajudamos você a criar um sistema seguro para recuperar seus bitcoins caso perca acesso às suas chaves.
          </li>
          <li>
            <strong>Planejamento de herança:</strong> Desenvolvemos estratégias para garantir que seus bitcoins sejam transmitidos aos seus herdeiros conforme sua vontade.
          </li>
        </ul>
      </section>

      <section className="card fadeInUp delay-3">
        <h2>
          <span className="icon" role="img" aria-label="Escolha">🎯</span> Por que escolher a Plano B
        </h2>
        <ul>
          <li>Linguagem simples e direta</li>
          <li>Foco exclusivo em Bitcoin</li>
          <li>Soluções práticas para segurança e planejamento financeiro</li>
          <li>Suporte personalizado para suas necessidades</li>
        </ul>
        <p>
          Com a Plano B, você aprende a usar o Bitcoin de forma segura e eficiente, garantindo a proteção do seu patrimônio digital para o presente e o futuro.
        </p>
      </section>
    </div>
  );
}

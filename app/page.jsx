"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  BookOpenCheck,
  Calendar,
  Check,
  KeyRound,
  LifeBuoy,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="first py-16 px-4 text-center pt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B50] mb-6 leading-tight">
            Soluções Simples <br className="hidden md:block" /> e Seguras com Bitcoin
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Da educação ao planejamento de herança:
            <br />
            sua jornada com Bitcoin começa aqui.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-primary-blue hover:opacity-50 text-white px-6 py-3 text-base font-medium rounded-md shadow transition-all">
              Saber Más
            </button>
            <button className="bg-white text-[#1A2B50] border border-gray-300 hover:bg-gray-100 px-6 py-3 text-base font-medium rounded-md shadow transition-all">
              Contáctanos
            </button>
          </div>
        </motion.div>
      </section>
      <ThirdSection />
      <SecondSection />
      <FourthSection />
      <SixthSection />
      <FifthSection />
    </>
  );
}

const SecondSection = () => {
  return (
    <section className="second py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#1A2B50] mb-12 flex items-center justify-center gap-2">
          O que o plano B Oferece{" "}
          <span className="inline-block">
            <LifeBuoy size={36} />
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between cursor-pointer">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <BookOpenCheck size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#1A2B50] mb-2">
              Educação <br /> em Bitcoin
            </h3>
            <p className="text-gray-600 mb-4">Tornamos o Bitcoin fácil de entender</p>
            <a href="/">
              <button className="bgbg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
                Explorar
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between cursor-pointer">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <ShieldCheck size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#1A2B50] mb-2">
              Consultoria
              <br /> em Segurança
            </h3>
            <p className="text-gray-600 mb-4">
              Aprenda as melhores práticas para armazenar seu Bitcoin com segurança
            </p>
            <a href="/">
              <button className="bg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
                Saiba Mais
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col justify-between cursor-pointer">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <KeyRound size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#1A2B50] mb-2">
              Heranças e <br /> Recuperação
            </h3>
            <p className="text-gray-600 mb-4">Proteja seu futuro com soluções confiáveis</p>
            <a href="#contact">
              <button className="bg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
                Contáctanos
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ThirdSection = () => {
  const points = [
    " Linguagem simples e direta",
    " Foco exclusivo em Bitcoin",
    " Soluções práticas para segurança e planejamento financeiro",
    " Suporte personalizado para suas necessidades",
  ];

  return (
    <section className="bg-[#21409a] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-2">
          Por que escolher o plano B
          <Target size={36} className="text-white" />
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg mb-8">
          {points.map((point, index) => (
            <li key={index} className="flex items-center justify-center gap-2">
              <span className="text-xl">
                <Check />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-white/90 text-center">
          Com o plano B, você aprende a usar o Bitcoin com segurança e eficiência, garantindo a
          proteção do seu patrimônio digital no presente e no futuro.
        </motion.p>
      </div>
    </section>
  );
};

const FourthSection = () => {
  return (
    <section className="bg-primary-blue py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-8">
          Nossos Parceiros
        </motion.h2>

        <motion.a
          href="https://www.linkedin.com/posts/wizardsardine_we-are-so-happy-to-welcome-plano-b-llc-as-activity-7311357025211273217-nSjk?utm_source=share&utm_medium=member_android&rcm=ACoAADRX89MByhO7nr5lY_UuPSFDAPhb5QyMbwk"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
          className="flex bg-[#ffffff] rounded-lg shadow-lg items-center justify-center gap-4 mx-auto max-w-2xl">
          <Image
            src="/assets/certificate.png"
            width={300}
            height={200}
            alt=""
            className="rounded-lg shadow-lg border border-white/20 h-auto max-w-[45%]"
          />
          <Image
            src="/assets/partner.png"
            width={300}
            height={200}
            alt=""
            className="rounded-lg shadow-lg border border-white/20 h-auto max-w-[45%]"
          />
        </motion.a>
      </div>
    </section>
  );
};

const FifthSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="fifth py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-3 text-[#1A2B50] flex items-center justify-center gap-2">
          <Calendar size={36} />
          Agendar uma Reunião
        </motion.h2>
      </div>
      <div
        className="calendly-inline-widget h-[62.5rem] lg:h-[680px]"
        data-url="https://calendly.com/prajalsharma1120/meet-with-prajal?hide_gdpr_banner=1"></div>
    </section>
  );
};

const SixthSection = () => {
  return (
    <section className="sixth py-20 bg-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#21409a] mb-10">
          Por que Criei o plano B
        </h2>

        <div className="flex justify-center mb-6">
          <Image
            src="/assets/pfp.jpg"
            alt="Rodrigo Carraresi"
            width={160}
            height={160}
            className="rounded-full w-40 h-40 object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-[#21409a]">Rodrigo Carraresi</h3>
        <p className="text-gray-700 mt-1 mb-4">
          Currently DevRel Leader at Thesis/Mezo and
          <br />
          Previously Head of DevRel at Ledger
        </p>

        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://x.com/carraresi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-blue p-2 rounded-xl transition hover:opacity-55">
            <Image width={36} height={36} src="/assets/x-dark.svg" alt="" className="size-9" />
          </a>
          <a
            href="https://es.linkedin.com/in/rodrigocarraresi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-blue p-2 rounded-xl transition hover:opacity-55">
            <Image width={36} height={36} src="/assets/linkedin.svg" alt="" className="size-9" />
          </a>
        </div>
      </div>
    </section>
  );
};

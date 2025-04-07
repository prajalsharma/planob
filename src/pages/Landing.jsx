import { useEffect } from "react";
import { motion } from "motion/react";
import {
  BookOpenCheck,
  Calendar,
  Check,
  KeyRound,
  LifeBuoy,
  ShieldCheck,
  Target,
} from "lucide-react";
import Partner from "../assets/partner.png";
import PartnerCertificate from "../assets/certificate.png";

const Landing = () => {
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
            Soluciones Simples <br className="hidden md:block" /> y Seguras de Bitcoin
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            De educación a planificación de herencias:
            <br />
            tu viaje en Bitcoin comienza aquí.
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
      <FifthSection />
    </>
  );
};
export default Landing;

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
          Qué Ofrece Plano B{" "}
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
            className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <BookOpenCheck size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#1A2B50] mb-2">
              Educación <br /> de Bitcoin
            </h3>
            <p className="text-gray-600 mb-4">Hacemos que Bitcoin sea fácil de entender</p>
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
            className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <ShieldCheck size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#1A2B50] mb-2">
              Consultoría <br /> de Seguridad
            </h3>
            <p className="text-gray-600 mb-4">
              Aprende las mejores prácticas para almacenar Bitcoin de forma segura
            </p>
            <a href="/">
              <button className="bg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
                Saber Más
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-primary-blue mb-4 flex justify-center items-center">
              <KeyRound size={36} />
            </div>
            <h3 className="text-xl font-semibold text-[#1A2B50] mb-2">
              Herencias y <br /> Recuperación
            </h3>
            <p className="text-gray-600 mb-4">Protege tu futuro con soluciones confiables</p>
            <a href="/">
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
    " Simple and straightforward language",
    " Exclusive focus on Bitcoin",
    " Practical solutions for security and financial planning",
    " Customized support for your needs",
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
          Why Choose Plan B
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
          With Plan B, you learn how to use Bitcoin safely and efficiently, ensuring the protection
          of your digital asset for the present and the future.
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
          Our Partners
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
          <img
            src={PartnerCertificate}
            alt=""
            className="rounded-lg shadow-lg border border-white/20 h-auto max-w-[45%]"
          />
          <img
            src={Partner}
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
    <section className="fifth py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-3 text-[#1A2B50] flex items-center justify-center gap-2">
          <Calendar size={36} />
          Contact Us
        </motion.h2>
      </div>
      <div
        className="calendly-inline-widget h-[62.5rem] lg:h-[680px]"
        data-url="https://calendly.com/prajalsharma1120/meet-with-prajal?hide_gdpr_banner=1"></div>
    </section>
  );
};

import { motion } from "motion/react";
import { Diamond } from "lucide-react";

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1 } },
};

const serviceCardVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Services() {
  return (
    <div className="pt-40 max-w-[56.25rem] flex flex-col items-center justify-center gap-8 p-4 mx-auto pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="flex flex-col items-center justify-center text-center my-5">
        <h1 className="text-[2.5rem] font-bold text-primary-blue">Serviços da Plano B</h1>
        <p className="text-lg text-blue-2">
          Especializada em educação e segurança relacionadas ao Bitcoin
        </p>
      </motion.div>

      <div className="flex flex-col gap-7.5">
        <motion.section
          initial="initial"
          variants={serviceCardVariants}
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="service-card">
          <h2>
            <span className="icon" role="img" aria-label="Oferta">
              🛟
            </span>
            O que a Plano B oferece
          </h2>
          <p>
            A Plano B é uma empresa especializada em educação e segurança relacionadas ao Bitcoin.
            Seu objetivo principal é ajudar as pessoas a compreenderem melhor essa tecnologia
            revolucionária e a protegerem seus investimentos de forma eficaz.
          </p>
          <ul>
            <li>
              <Diamond />
              <span>
                <strong>Educação sobre Bitcoin:</strong> Explicamos de maneira simples o que é o
                Bitcoin, como funciona e para que serve.
              </span>
            </li>
            <li>
              <Diamond />
              <span>
                <strong>Consultoria em segurança:</strong> Ensinamos as melhores práticas para
                guardar seus bitcoins de forma segura.
              </span>
            </li>
            <li>
              <Diamond />
              <span>
                <strong>Parceria com a Liana Wallet:</strong> Oferecemos soluções avançadas para
                proteção de ativos digitais.
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial="initial"
          variants={serviceCardVariants}
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
          className="service-card">
          <h2>
            <span className="icon" role="img" aria-label="Recuperação">
              🔐
            </span>
            Planos de recuperação e herança
          </h2>
          <p>
            Um dos principais diferenciais da Plano B é o foco em planos de recuperação e herança
            para bitcoins. Através da parceria com a Liana Wallet, oferecemos:
          </p>
          <ul>
            <li>
              <Diamond />
              <span>
                <strong>Plano de recuperação:</strong> Ajudamos você a criar um sistema seguro para
                recuperar seus bitcoins caso perca acesso às suas chaves.
              </span>
            </li>
            <li>
              <Diamond />
              <span>
                <strong>Planejamento de herança:</strong> Desenvolvemos estratégias para garantir
                que seus bitcoins sejam transmitidos aos seus herdeiros conforme sua vontade.
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial="initial"
          variants={serviceCardVariants}
          whileInView="animate"
          viewport={{ once: true, amount: 0.7 }}
          className="service-card">
          <h2>
            <span className="icon" role="img" aria-label="Escolha">
              🎯
            </span>
            Por que escolher a Plano B
          </h2>
          <ul>
            <li>
              <Diamond />
              Linguagem simples e direta.
            </li>
            <li>
              <Diamond />
              Foco exclusivo em Bitcoin.
            </li>
            <li>
              <Diamond />
              Soluções práticas para segurança e planejamento financeiro.
            </li>
            <li>
              <Diamond />
              Suporte personalizado para suas necessidades.
            </li>
          </ul>
          <p>
            Com a Plano B, você aprende a usar o Bitcoin de forma segura e eficiente, garantindo a
            proteção do seu patrimônio digital para o presente e o futuro.
          </p>
        </motion.section>
      </div>
    </div>
  );
}

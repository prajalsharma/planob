"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
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
            Bitcoin Solutions
            <br className="hidden md:block" /> made Simple
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            From education to inheritance planning:
            <br />
            Your journey with Bitcoin starts here.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {" "}
            <Link href="/blogs">
              <button className="bg-primary-blue hover:opacity-50 text-white px-6 py-3 text-base font-medium rounded-md shadow transition-all">
                Know More
              </button>
            </Link>
            <a href="#contact">
              <button className="bg-white text-[#1A2B50] border border-gray-300 hover:bg-gray-100 px-6 py-3 text-base font-medium rounded-md shadow transition-all">
                Contact Us
              </button>
            </a>
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
          What Plan B offers{" "}
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
              Education <br /> in Bitcoin
            </h3>
            <p className="text-gray-600 mb-4">
We make Bitcoin easy to understand</p>
            <a href="/blogs">
              <button className="bgbg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
                Explore
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
              Consultancy

              <br /> in Security
            </h3>
            <p className="text-gray-600 mb-4">
              Learn best practices for storing your Bitcoin securely
            </p>
            <a href="#aboutus">
              <button className="bg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
                Learn More
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
             Inheritances and
 <br /> Recovery
            </h3>
            <p className="text-gray-600 mb-4">Protect your future with reliable solutions</p>
            <a href="#contact">
              <button className="bg-white hover:bg-primary-blue border-2 border-primary-blue text-primary-blue hover:text-white px-5 py-2 rounded-md transition-all">
                Contact Us
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
          Why choose plano B
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
          With plano B, you learn how to use Bitcoin safely and efficiently, ensuring the protection of your digital asset now and in the future.
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
          Schedule a Meeting
        </motion.h2>
      </div>
      <div
        className="calendly-inline-widget h-[62.5rem] lg:h-[680px]"
        data-url="https://calendly.com/carraresi/plano-b-start?hide_gdpr_banner=1"></div>
    </section>
  );
};

const SixthSection = () => {
  return (
    <section id="aboutus" className="sixth py-20 bg-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#21409a] mb-10">
          Why I created plano B
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
          After years of helping friends and people around me understand Bitcoin in a practical way, I felt it was time to make that work official. That’s how plano B was born: an independent consultancy for anyone who wants to learn about Bitcoin in a simple, secure way without complicated jargon. The idea came from my desire to share knowledge with those who want to protect themselves financially but feel overwhelmed by too much technical or confusing information.

<br />
           <br />As a “Bitcoin Concierge” (yes, it’s a real title and no, I don’t wear a bow tie 🎩), my goal is to make Bitcoin accessible to everyone, regardless of their technical background. I also launched a free newsletter that delivers straightforward, no-fluff content.
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

"use client";

import { useEffect, useState } from "react";
import { motion, useCycle } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import useMediaQuery from "@/hooks/useMediaQuery";
import { MenuToggle } from "./MenuToggle";
import { usePathname, useRouter } from "next/navigation";

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 168.5px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(19px at 168.5px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const largeScreen = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const isEnglish = pathname.includes("/en");

  const links = [
    { name: isEnglish ? "Blog" : "Blogs", url: "/blogs" },
    { name: isEnglish ? "Contact Us" : "Fale conosco", url: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = (link) => {
    if (link.url === "#contact") {
      router.push("/#contact");
    } else {
      router.push(link.url);
    }
  };

  return (
    <header
      className={`flex items-center justify-between py-2 pl-2 pr-5 md:pl-0 md:pr-7 md:py-0 fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-2"
          onClick={() => toggleOpen()}
        />
      )}

      <nav className="flex items-center w-full justify-between">
        <div>
          <Link href="/" className="font-bold text-2xl flex items-center text-primary-blue">
            <Image
              width={68}
              height={68}
              src="/assets/planob.svg"
              alt="Plano B logo"
              className="size-17 md:size-29.5"
              priority
            />
            <p className="-translate-x-2">plano B</p>
          </Link>
        </div>

        {largeScreen && (
          <ul className="font-medium gap-8 text-lg flex mr-30">
            {links.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleContact(link)}
                  className="hover:text-primary-blue transition-colors relative link-underline">
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        )}

        <motion.div className="flex items-center gap-4 relative">
          <LanguageSelector />
          {!largeScreen && (
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="relative grid place-items-center z-50">
              <motion.div
                className="absolute -top-[30.5px] -right-5 w-50 h-screen bg-primary-blue"
                variants={sidebarVariants}
              />
              <motion.ul variants={listVariants} className="absolute -left-34 w-full h-full top-11">
                {links.map((link, index) => (
                  <motion.li variants={itemVariants} key={index} className="py-4">
                    <button
                      onClick={() => {
                        handleContact(link);
                        toggleOpen();
                      }}
                      className="text-white w-full">
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.div>
          )}
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;

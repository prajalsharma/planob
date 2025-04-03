// src/components/Header.jsx
import { motion, useCycle } from "motion/react";
import Logo from "../assets/planob.svg";
import LanguageSelector from "./LanguageSelector";
import useMediaQuery from "@/hooks/useMediaQuery";
import { MenuToggle } from "./MenuToggle";
import { Link } from "react-router-dom";

const links = [
  { name: "Recomendações", url: "/recommendacoes" },
  { name: "Serviços", url: "/services" },
  { name: "Blogs", url: "/blogs" }, // blog previews are on home page
  { name: "Fale conosco", url: "#contato" },
];

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

  return (
    <header className="flex items-center justify-between py-2 pl-2 pr-5 md:pl-0 md:pr-7 md:py-0 fixed w-full z-10 bg-white/65 backdrop-blur shadow">
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-2"
          onClick={() => toggleOpen()}
        />
      )}

      <nav className="flex items-center w-full justify-between">
        <div>
          <Link to="/" className="font-bold text-2xl flex items-center text-primary-blue">
            <img src={Logo} alt="Plano B logo" className="size-17 md:size-29.5" />
            <p className="-translate-x-2">plano B</p>
          </Link>
        </div>

        {largeScreen && (
          <ul className="font-medium gap-8 text-lg flex">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className="hover:text-primary-blue transition-colors">
                  {link.name}
                </Link>
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
                    <Link to={link.url} className="text-white" onClick={() => toggleOpen()}>
                      {link.name}
                    </Link>
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

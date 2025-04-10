import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import China from "../assets/flags/china.svg";
import Spain from "../assets/flags/spain.svg";
import India from "../assets/flags/india.svg";
import Japan from "../assets/flags/japan.svg";
import USA from "../assets/flags/usa.svg";
import Brazil from "../assets/flags/brazil.svg";

const languages = [
  {
    name: "Portuguese",
    code: "pt-BR", // Brazilian Portuguese
    country: "BR",
    flag: Brazil,
  },
  {
    name: "English",
    code: "en",
    country: "US",
    flag: USA,
  },
  {
    name: "Spanish",
    code: "es",
    country: "ES",
    flag: Spain,
  },
  {
    name: "Hindi",
    code: "hi",
    country: "IN",
    flag: India,
  },
  {
    name: "Chinese",
    code: "zh",
    country: "CN",
    flag: China,
  },
  {
    name: "Japanese",
    code: "ja",
    country: "JP",
    flag: Japan,
  },
];

const LanguageSelector = () => {
  const defaultLang = languages.find((lang) => lang.code === "pt-BR");
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLang);

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    const matchedLanguage = languages.find((lang) =>
      browserLang.toLowerCase().startsWith(lang.code.toLowerCase())
    );
    if (matchedLanguage) {
      setSelectedLanguage(matchedLanguage);
    }
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);

    const googleLangCodeMap = {
      "pt-BR": "pt",
      en: "en",
      es: "es",
      hi: "hi",
      zh: "zh-CN",
      ja: "ja",
    };

    const langCode = googleLangCodeMap[language.code];
    const selectEl = document.querySelector(".goog-te-combo");
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Language Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="group border-1 rounded px-2.5 py-1 hover:bg-primary-blue hover:text-white transition-colors md:mr-0">
            <Languages className="size-6" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-50 mr-3">
          {languages.map((language, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => handleLanguageChange(language)}
              className={`group my-1 justify-between ${
                selectedLanguage === language
                  ? "bg-primary-blue text-white"
                  : ""
              }`}
            >
              <div>
                <img
                  src={language.flag}
                  alt={language.name}
                  className="size-6 inline-block mr-2 rounded-sm"
                />
                {language.name}
              </div>
              <span
                className={`group-hover:text-white text-xs text-muted-foreground 
                ${selectedLanguage === language ? "text-white" : ""}`}
              >
                {language.country}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default LanguageSelector;

"use client";

import { useState } from "react";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

const languages = [
  {
    name: "Portuguese",
    code: "pt",
    country: "BR",
    flag: "/assets/flags/brazil.svg",
  },
  {
    name: "English",
    code: "en",
    country: "US",
    flag: "/assets/flags/usa.svg",
  },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const router = useRouter();

  const handleLanguageChange = (lang) => {
    if (lang.code === "en") {
      router.push("/en");
      setSelectedLanguage(lang);
    } else if (lang.code === "pt") {
      router.push("/");
      setSelectedLanguage(lang);
    } else {
      setSelectedLanguage(lang);

      const fromLang = "pt"; // original language of your content
      const toLang = lang.code;

      // If same language, stay on current page
      if (toLang === fromLang) return;

      const currentUrl = window.location.href;

      // Open translated version in new tab
      const translateUrl = `https://translate.google.com/translate?hl=${toLang}&sl=${fromLang}&u=${encodeURIComponent(
        currentUrl
      )}`;
      window.open(translateUrl, "_blank");
    }
  };

  return (
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
              selectedLanguage.code === language.code ? "bg-primary-blue text-white" : ""
            }`}>
            <div>
              <img
                src={language.flag}
                alt={language.name}
                className="size-6 inline-block mr-2 rounded-sm"
              />
              {language.name}
            </div>
            <span
              className={`group-hover:text-white text-xs text-muted-foreground ${
                selectedLanguage.code === language.code ? "text-white" : ""
              }`}>
              {language.country}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    de: {
      text: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie unserer Verwendung von Cookies zu.",
      accept: "Akzeptieren",
      decline: "Ablehnen",
      more: "Mehr erfahren"
    },
    en: {
      text: "We use cookies to improve your experience. By using our website, you agree to our use of cookies.",
      accept: "Accept",
      decline: "Decline",
      more: "Learn more"
    },
    ru: {
      text: "Мы используем файлы cookie, чтобы улучшить ваш опыт. Используя наш сайт, вы соглашаетесь с использованием файлов cookie.",
      accept: "Принять",
      decline: "Отклонить",
      more: "Подробнее"
    }
  };

  const t = content[language as keyof typeof content] || content.de;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            {t.text}{" "}
            <Link href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/30">
              {t.more}
            </Link>
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={() => handleConsent(false)}
            className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-zinc-400 hover:text-white border border-white/10 hover:bg-white/5 rounded-full transition-all uppercase tracking-wider"
          >
            {t.decline}
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="flex-1 md:flex-none px-8 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-lg shadow-blue-600/20 uppercase tracking-wider"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
const heroBg = "/attached_assets/generated_images/dark_tattoo_studio_hero_background.png";
import { Button } from "@/components/ui/button";
import StudioLogo from "@/components/StudioLogo";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Mail } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Syndicate Ink Lab Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute top-8 left-8 z-20 md:block">
        <div className="absolute top-5 right-12 z-40 md:right-28">
          <a
            href="https://www.instagram.com/syndicate_ink_lab?igsh=MXA5d3VycDVyZG8yZQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-white/30"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{t("footer.openingHours")}</span>
          <span className="text-white font-heading text-xl">{t("footer.hours")}</span>
          <p className="text-white/30 text-[9px] italic mt-1 max-w-[180px] leading-tight mb-4">
            {t("footer.disclaimer")}
          </p>
          <a 
            href="https://www.instagram.com/syndicate_inklab?igsh=M3g3N2s2cXEydGky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="mailto:Syndicateinklab19@gmail.com" 
            className="text-white/40 hover:text-white transition-colors mt-2"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary/80 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-sans pt-8 md:pt-0">
            {t("hero.location")}
          </p>
          <div className="mb-6 flex justify-center transform scale-75 md:scale-100 origin-top pt-2">
            <StudioLogo />
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light font-sans italic border-y border-white/10 py-10 px-6 bg-black/80 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-6 text-lg font-heading tracking-wider uppercase transition-all duration-300 cursor-pointer"
              onClick={scrollToBooking}
              data-testid="button-book-appointment"
            >
              {t("common.bookAppointment")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/50 rounded-none px-8 py-6 text-lg font-heading tracking-wider uppercase backdrop-blur-sm transition-all duration-300 cursor-pointer"
              onClick={() => document.getElementById("artists")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-view-artists"
            >
              {t("common.viewArtists")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

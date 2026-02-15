import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6 col-span-1 md:col-span-2">
          <h2 className="text-4xl font-heading font-bold uppercase tracking-tighter">Syndicate Ink Lab</h2>
          <p className="text-zinc-400 max-w-sm font-light leading-relaxed">
            {t("footer.tagline")}
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/syndicate_ink_lab?igsh=MXA5d3VycDVyZG8yZQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" 
              data-testid="link-instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" data-testid="link-facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* WhatsApp Button */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/4917679940692"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all shadow-lg"
          >
            <span className="text-2xl">💬</span>
            <span className="font-semibold">WhatsApp</span>
          </a>
        </div>


        <div>
          <h3 className="text-xl font-heading uppercase mb-6 tracking-wide">{t("footer.contact")}</h3>
          <ul className="space-y-4 text-zinc-400 font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-white" />
              <span data-testid="text-address">{t("footer.address")}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 shrink-0 text-white" />
              <span data-testid="text-phone">{t("footer.phone")}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 shrink-0 text-white" />
              <span data-testid="text-email">{t("footer.email")}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-heading uppercase mb-6 tracking-wide">{t("footer.openingHours")}</h3>
          <ul className="space-y-2 text-zinc-400 font-light">
            <li className="flex justify-between">
              <span>{t("footer.monFri")}</span>
              <span className="text-white" data-testid="hours-monfri">{t("footer.hours")}</span>
            </li>
          </ul>
          <p className="text-[10px] text-zinc-500 mt-2 italic leading-tight">{t("footer.disclaimer")}</p>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-zinc-600 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Syndicate Ink Lab. {t("footer.copyright")}</p>
        <div className="mt-4 flex justify-center gap-6">
          <a 
            href="/impressum" 
            className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-[10px]"
            data-testid="link-impressum"
          >
            Impressum
          </a>
          <a 
            href="/datenschutz" 
            className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-[10px]"
            data-testid="link-datenschutz"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}

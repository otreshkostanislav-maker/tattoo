import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Clock, Phone } from "lucide-react";

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            {t("footer.contact")}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.5!2d8.5572!3d52.0467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAyJzQ4LjEiTiA4wrAzMycyNS45IkU!5e0!3m2!1sen!2sde!4v1708180800000""
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%) invert(92%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Syndicate Ink Lab Location"
            />
            <div className="absolute inset-0 pointer-events-none border border-blue-500/20 rounded-lg" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-heading uppercase text-lg mb-1">Adresse</h3>
                <p className="text-zinc-400">Schildescher Str. 94</p>
                <p className="text-zinc-400">33611 Bielefeld, Germany</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <Clock className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-heading uppercase text-lg mb-1">{t("footer.openingHours")}</h3>
                <p className="text-zinc-400">{t("footer.monFri")}: {t("footer.hours")}</p>
                <p className="text-[10px] text-zinc-500 mt-1 italic leading-tight max-w-[200px]">{t("footer.disclaimer")}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <Phone className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-heading uppercase text-lg mb-1">Kontakt</h3>
                <p className="text-zinc-400">+49 176 79940692</p>
                <p className="text-zinc-400">syndicateinklab@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

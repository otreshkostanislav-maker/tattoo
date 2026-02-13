import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingBag } from "lucide-react";

export default function MerchSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-black border-b border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-tight">
            {t("merch.title")}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light mb-12">
            {t("merch.subtitle")}
          </p>
          
          <div className="bg-zinc-900/50 p-16 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-6 hover:border-white/20 transition-colors">
            <ShoppingBag className="w-16 h-16 text-white/40" />
            <h3 className="text-2xl font-heading uppercase text-white/60 tracking-wider">
              {t("merch.comingSoon")}
            </h3>
            <p className="text-white/40 font-light">
              Exklusive T-Shirts, Hoodies und Accessoires bald verfügbar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

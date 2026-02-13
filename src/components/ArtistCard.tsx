import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ArrowRight } from "lucide-react";

interface ArtistProps {
  artist: {
    id: number;
    nameKey: string;
    roleKey: string;
    image: string;
    portfolio: string[];
    bioKey: string;
    instagram?: string;
  };
}

export default function ArtistCard({ artist }: ArtistProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer relative overflow-hidden h-[500px] w-full bg-card group-hover:shadow-2xl transition-all duration-500 border border-white/5" data-testid={`card-artist-${artist.id}`}>
            <img
              src={artist.image}
              alt={t(artist.nameKey)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary/60 uppercase tracking-widest text-xs mb-2 font-sans">{t(artist.roleKey)}</p>
              <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase leading-none">{t(artist.nameKey)}</h3>
              <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                <span className="uppercase tracking-wider text-sm font-medium">{t("artists.portfolio")}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl bg-zinc-950 border-white/10 text-white max-h-[90vh] overflow-y-auto" data-testid={`dialog-artist-${artist.id}`}>
          <DialogHeader>
            <DialogTitle className="text-4xl font-heading uppercase tracking-wide">{t(artist.nameKey)}</DialogTitle>
            <DialogDescription className="text-lg text-white/60 font-sans">{t(artist.roleKey)}</DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 shrink-0 overflow-hidden rounded-full border-2 border-white/10">
                <img src={artist.image} alt={t(artist.nameKey)} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <p className="text-white/80 leading-relaxed font-light">{t(artist.bioKey)}</p>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="border-white/20 hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-xs" 
                    data-testid={`button-instagram-artist-${artist.id}`}
                    onClick={() => artist.instagram && window.open(artist.instagram, '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    {t("artists.followOnInstagram")}
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-heading uppercase tracking-wider border-b border-white/10 pb-2">{t("artists.selectedWorks")}</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {artist.portfolio.map((work, index) => (
                  <div key={index} className="aspect-square overflow-hidden bg-white/5 rounded-sm hover:opacity-80 transition-opacity cursor-pointer group/img" data-testid={`img-portfolio-${artist.id}-${index}`}>
                    <img 
                      src={work} 
                      alt={`${t(artist.nameKey)} work ${index + 1}`} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover/img:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

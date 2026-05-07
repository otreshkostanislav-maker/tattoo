import { useLanguage } from "@/context/LanguageContext";
import Hero from "@/components/Hero";
import ArtistCard from "@/components/ArtistCard";
import BookingSection from "@/components/BookingSection";
import MerchSection from "@/components/MerchSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { motion } from "framer-motion";
const artist1Img =
  "/attached_assets/generated_images/tattoo_artist_portrait_1.png";
const artist2Img =
  "/attached_assets/generated_images/tattoo_artist_portrait_2.png";
const artist3Img =
  "/attached_assets/generated_images/tattoo_artist_portrait_3.png";

const work1 = "/attached_assets/generated_images/blackwork_tattoo_example.png";
const work2 = "/attached_assets/generated_images/realism_tattoo_example.png";
const work3 =
  "/attached_assets/generated_images/traditional_tattoo_example.png";

export default function Home() {
  const { t } = useLanguage();

  const artists = [
    {
      id: 1,
      nameKey: "artists.artist1Name",
      roleKey: "artists.artist1Role",
      image: "/attached_assets/roman.jpg",
      instagram:
        "https://www.instagram.com/roman18tattoo?igsh=MTAyOXBhczUzdnB4Mw==",
      portfolio: [
                   "/attached_assets/romanportfolio/IMG_8889.png",
                   "/attached_assets/romanportfolio/IMG_8897.jpeg",
                   "/attached_assets/romanportfolio/IMG_8898.png",
                   "/attached_assets/romanportfolio/IMG_8900.jpeg",
                   "/attached_assets/romanportfolio/IMG_8903.png",
                   "/attached_assets/romanportfolio/IMG_8906.jpeg",
                 ],
      bioKey: "artists.artist1Bio",
    },
    {
      id: 2,
      nameKey: "artists.artist2Name",
      roleKey: "artists.artist2Role",
      image: "/attached_assets/irina.jpg",
      instagram:
        "https://www.instagram.com/iryna.nikolaevna25?igsh=cHBjODc2OTNudTRz",
      portfolio: [
                   "/attached_assets/irinaportfolio/IMG_8884.jpeg",
                   "/attached_assets/irinaportfolio/IMG_8885.jpeg",
                   "/attached_assets/irinaportfolio/IMG_8886.jpeg",
                   "/attached_assets/irinaportfolio/IMG_8887.jpeg",
                   "/attached_assets/irinaportfolio/IMG_8888.jpeg",
                   "/attached_assets/irinaportfolio/IMG_8890.jpeg",
                 ],
      bioKey: "artists.artist2Bio",
    },
    {
      id: 3,
      nameKey: "artists.artist3Name",
      roleKey: "artists.artist3Role",
      image: "/attached_assets/stas.jpg",
      instagram: "https://www.instagram.com/s.f.ink?igsh=MWFxa3E1OTRubWI0cQ==",
      portfolio: [
                   "/attached_assets/stasportfolio/IMG_8893.jpeg",
                   "/attached_assets/stasportfolio/IMG_8894.jpeg",
                   "/attached_assets/stasportfolio/IMG_8896.jpeg",
                   "/attached_assets/stasportfolio/IMG_8899.jpeg",
                   "/attached_assets/stasportfolio/IMG_8901.png",
                 ],
      bioKey: "artists.artist3Bio",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />

      {/* Artists Section */}
      <section id="artists" className="py-24 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 uppercase tracking-tight"
            >
              {t("artists.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                {/* accent */}
              </span>
            </motion.h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
              {t("artists.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Info / FAQ Block (Extra "Free Blocks" as requested) */}
      <section className="py-24 px-4 bg-zinc-950 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-heading uppercase tracking-wide text-white">
            {t("info.beforeYouBook")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div
              className="bg-zinc-900/50 p-6 border border-white/5 hover:border-white/20 transition-colors"
              data-testid="card-info-consultation"
            >
              <h3 className="text-xl font-heading uppercase text-white mb-3">
                {t("info.consultation")}
              </h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                {t("info.consultationDesc")}
              </p>
            </div>
            <div
              className="bg-zinc-900/50 p-6 border border-white/5 hover:border-white/20 transition-colors"
              data-testid="card-info-hygiene"
            >
              <h3 className="text-xl font-heading uppercase text-white mb-3">
                {t("info.hygiene")}
              </h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                {t("info.hygieneDesc")}
              </p>
            </div>
            <div
              className="bg-zinc-900/50 p-6 border border-white/5 hover:border-white/20 transition-colors"
              data-testid="card-info-aftercare"
            >
              <h3 className="text-xl font-heading uppercase text-white mb-3">
                {t("info.aftercare")}
              </h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                {t("info.aftercareDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />

      <MerchSection />

      <MapSection />

      <Footer />
      <CookieBanner />
    </div>
  );
}

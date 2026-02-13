import { useLanguage } from "@/context/LanguageContext";

export default function Impressum() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-zinc-300 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-heading text-white uppercase border-b border-white/10 pb-4">Impressum</h1>
        
        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase">Angaben gemäß § 5 TMG</h2>
          <div className="space-y-1">
            <p className="font-bold text-white">Syndicate Ink Lab</p>
            <p>Rechtsform: Gewerbebetrieb</p>
            <p>Inhaber: Maksim Roman</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase">Anschrift</h2>
          <div className="space-y-1">
            <p>Schildescher Straße 94</p>
            <p>33611 Bielefeld</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase">Kontakt</h2>
          <div className="space-y-1">
            <p>Telefon: +49 160 4554240</p>
            <p>E-Mail: syndicateinklab@gmail.com</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase">Umsatzsteuer</h2>
          <p>Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer erhoben.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div className="space-y-1">
            <p>Maksim Roman</p>
            <p>Schildescher Straße 94</p>
            <p>33611 Bielefeld</p>
            <p>Deutschland</p>
          </div>
        </section>

        <div className="pt-10">
          <button 
            onClick={() => window.history.back()}
            className="text-white hover:text-blue-500 transition-colors uppercase tracking-widest text-sm flex items-center gap-2"
          >
            ← Zurück / Back
          </button>
        </div>
      </div>
    </div>
  );
}

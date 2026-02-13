import { useLanguage } from "@/context/LanguageContext";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-heading text-white uppercase border-b border-white/10 pb-4">Datenschutzerklärung</h1>
        
        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">1. Datenschutz auf einen Blick</h2>
          <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen der DSGVO.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">2. Verantwortlicher</h2>
          <div className="space-y-1">
            <p className="font-bold text-white uppercase">Syndicate Ink Lab</p>
            <p>Inhaber: Maksim Roman</p>
            <p>Schildescher Straße 94</p>
            <p>33611 Bielefeld</p>
            <p>Deutschland</p>
            <p className="pt-2">E-Mail: syndicateinklab@gmail.com</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">3. Hosting</h2>
          <p>Unsere Website wird bei einem externen Hosting-Dienstleister betrieben. Personenbezogene Daten werden auf den Servern des Hosters verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">4. Cookies</h2>
          <p>Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Ein Teil der Cookies ist technisch notwendig, andere dienen der Analyse und dem Marketing.</p>
          <p>Die Verwendung nicht notwendiger Cookies erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">5. Cookie-Einwilligung</h2>
          <p>Beim ersten Besuch unserer Website werden Sie über ein Cookie-Banner um Ihre Einwilligung gebeten. Diese Einwilligung können Sie jederzeit widerrufen oder ändern.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">6. Analyse- und Marketingtools</h2>
          <p>Diese Website nutzt Dienste zur Webanalyse und zu Marketingzwecken, darunter: Google Analytics, Meta (Facebook & Instagram).</p>
          <p>Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung. IP-Adressen werden anonymisiert verarbeitet.</p>
          <p>Es kann nicht ausgeschlossen werden, dass Daten in die USA übertragen werden. Die Übertragung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 49 Abs. 1 lit. a DSGVO.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">7. Kontaktaufnahme</h2>
          <p>Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">8. Ihre Rechte</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerruf Ihrer Einwilligung</li>
            <li>Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-heading text-white uppercase tracking-wider">9. SSL- / TLS-Verschlüsselung</h2>
          <p>Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.</p>
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

import { Flame, ShieldCheck, Award, TrendingUp } from 'lucide-react';

export function Expertise() {
  return (
    <section id="expertise" className="bg-white">
      {/* Experience Opérationnelle - Full Width Image */}
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1734445558870-72ee57ee3930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNjdWUlMjB0ZWFtJTIwYWN0aW9ufGVufDF8fHx8MTc2ODgzNDMwOXww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Rescue team in action" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <Flame className="w-16 h-16 text-amber-400 mb-6" />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">20 ans d'expérience opérationnelle</h2>
              <p className="text-xl leading-relaxed">
                Une culture du secours forgée par deux décennies d'engagement Sapeur-Pompier et de formateur incendie. Une connaissance intime du feu et de l'urgence, mais également de la gestion de crise réelle. Notre structure s'appuie sur une expérience concrète : la responsabilité régulière de dispositifs de sécurité de grande envergure en Occitanie, encadrant plusieurs dizaines de milliers de personnes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Prévention - Split Layout */}
      <div className="grid lg:grid-cols-2">
        <div className="bg-gray-900 text-white p-12 lg:p-20 flex items-center">
          <div>
            <ShieldCheck className="w-16 h-16 text-amber-400 mb-6" />
            <h2 className="text-4xl sm:text-5xl mb-6">Expertise en Prévention & Analyse des Risques</h2>
            <p className="text-xl leading-relaxed text-gray-300">
              Parce que le meilleur accident est celui qui n'arrive pas. Nous déployons une méthodologie rigoureuse pour l'analyse des risques professionnels et sociétaux. De la rédaction du Document Unique (DUERP) pour les entreprises à l'élaboration et animation des Plans Communaux de Sauvegarde (PCS) pour les mairies, notre approche transforme la contrainte administrative en véritable bouclier pour vos équipes et vos administrés.
            </p>
          </div>
        </div>
        <div className="relative h-96 lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1768333568805-97e6e6f88267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjB0cmFpbmluZyUyMHRlYW18ZW58MXx8fHwxNzY4ODM0MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Training team" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* SSIAP 3 - Split Layout Reversed */}
      <div className="grid lg:grid-cols-2">
        <div className="relative h-96 lg:h-auto order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1713689824343-77d2f99e19b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzYWZldHklMjBpbnN0cnVjdG9yfGVufDF8fHx8MTc2ODgzNDMwOXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Professional instructor" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="bg-amber-600 text-white p-12 lg:p-20 flex items-center order-1 lg:order-2">
          <div>
            <Award className="w-16 h-16 text-white mb-6" />
            <h2 className="text-4xl sm:text-5xl mb-6">Haute Qualification Réglementaire</h2>
            <h3 className="text-3xl mb-4">SSIAP 3</h3>
            <p className="text-xl leading-relaxed">
              Le niveau d'expertise SSIAP 3 (Chef de Service Sécurité Incendie) pour auditer, conseiller et garantir la conformité des ERP les plus complexes et des Immeubles de Grande Hauteur.
            </p>
          </div>
        </div>
      </div>

      {/* Connaissance du Marché */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 text-amber-400 mb-6 mx-auto" />
          <h2 className="text-4xl sm:text-5xl mb-8">La Connaissance du Marché</h2>
          <p className="text-2xl leading-relaxed max-w-4xl mx-auto text-gray-300">
            Avoir évolué au cœur du secteur de la protection incendie nous permet aujourd'hui de décrypter les devis que vous recevez. Nous identifions immédiatement ce qui est nécessaire de ce qui est superflu.
          </p>
        </div>
      </div>
    </section>
  );
}
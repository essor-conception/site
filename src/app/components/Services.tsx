import { Shield, GraduationCap, AlertTriangle } from 'lucide-react';

export function Services() {
  return (
    <section id="pillars" className="bg-white">
      {/* Audit & Conseil - Hero Style */}
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1766069211780-ce28c0ba20d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjB0cmFpbmluZyUyMGhhbmRzfGVufDF8fHx8MTc2ODgzNDMwOXww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Safety training" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-16 h-16 text-amber-400" />
                <h2 className="text-5xl sm:text-6xl text-white">Audit & Conseil</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-amber-600 p-8 mb-12">
                <p className="text-2xl mb-4 text-white">Ne subissez plus la réglementation, maîtrisez-la.</p>
                <p className="text-lg text-gray-200">
                  <strong className="text-white">Le Concept :</strong> Nous sommes votre Tiers de Confiance. Contrairement aux vendeurs de matériel, notre audit est désintéressé. Si vous n'avez pas besoin d'un équipement, nous vous le dirons.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/95 backdrop-blur-sm p-8 border-l-4 border-amber-600">
                  <h3 className="text-2xl mb-4">Pour les Maires & Élus</h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Rédaction et animation des PCS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Gestion ERP dès la 5ème catégorie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Formation événements communaux</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/95 backdrop-blur-sm p-8 border-l-4 border-amber-600">
                  <h3 className="text-2xl mb-4">Pour les Chefs d'Entreprise</h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Rédaction du DUERP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Analyse des accidents du travail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Commissions de sécurité</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formations - Dark Background */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-12">
            <GraduationCap className="w-20 h-20 text-amber-400" />
            <div>
              <h2 className="text-5xl sm:text-6xl mb-2">Formations</h2>
              <p className="text-2xl text-gray-300">Des formations pour agir, pas pour dormir.</p>
            </div>
          </div>

          <div className="bg-amber-600/20 border-l-4 border-amber-600 p-8 mb-16">
            <p className="text-xl leading-relaxed text-gray-200">
              L'actualité nous rappelle chaque jour que la formation sauve des vies. Fini la théorie ennuyeuse : place à la réalité virtuelle, aux cas concrets et à l'action.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white text-gray-900 p-8 hover:bg-amber-600 hover:text-white transition-all duration-300 group">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl mb-4">Incendie</h3>
              <p className="text-lg">Extincteurs sur feux réels ou Réalité Virtuelle (VR) pour vous mettre en situation dans vos locaux.</p>
            </div>

            <div className="bg-white text-gray-900 p-8 hover:bg-amber-600 hover:text-white transition-all duration-300 group">
              <div className="text-5xl mb-4">⛑️</div>
              <h3 className="text-2xl mb-4">Secours</h3>
              <p className="text-lg">SST (Sauveteur Secouriste du Travail), Gestes qui sauvent.</p>
            </div>

            <div className="bg-white text-gray-900 p-8 hover:bg-amber-600 hover:text-white transition-all duration-300 group">
              <div className="text-5xl mb-4">🚨</div>
              <h3 className="text-2xl mb-4">Risques Spéciaux</h3>
              <p className="text-lg">Menace Attentats, Catastrophes Naturelles.</p>
            </div>

            <div className="bg-white text-gray-900 p-8 hover:bg-amber-600 hover:text-white transition-all duration-300 group">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl mb-4">Pédagogie Ludique</h3>
              <p className="text-lg">Escape Games sécurité, Formations pour les écoles et associations.</p>
            </div>

            <div className="bg-white text-gray-900 p-8 hover:bg-amber-600 hover:text-white transition-all duration-300 group">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl mb-4">Formation de Formateurs</h3>
              <p className="text-lg">Transmettre la pédagogie et former les futurs formateurs.</p>
            </div>

            <div className="bg-white text-gray-900 p-8 hover:bg-amber-600 hover:text-white transition-all duration-300 group">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl mb-4">Formations sur-mesure</h3>
              <p className="text-lg">Organisateurs d'événements, élus, exploitants agricoles...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Building2, Factory, Users, User } from 'lucide-react';

interface TargetsProps {
  onContactClick: () => void;
}

export function Targets({ onContactClick }: TargetsProps) {
  return (
    <section id="targets" className="bg-white">
      {/* Header with full-width impact */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6">Nos Clients</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Des solutions adaptées à chaque type d'organisation
          </p>
        </div>
      </div>

      {/* Four Target Sections - Full Width Cards */}
      <div>
        {/* Collectivités */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="bg-gray-900 text-white p-12 lg:p-20 flex items-center order-2 lg:order-1">
            <div>
              <Building2 className="w-20 h-20 text-amber-400 mb-8" />
              <h3 className="text-4xl sm:text-5xl mb-8">Collectivités</h3>
              <ul className="space-y-4 text-xl text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Plans Communaux de Sauvegarde</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Gestion ERP 5ème catégorie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Formation élus & agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Événements communaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Accompagnement réglementaire</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-0 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1626048060272-ed93e6d53303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBtZWV0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODgzMzA2MHww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Safety meeting" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Entreprises */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="relative min-h-[400px] lg:min-h-0">
            <img 
              src="https://images.unsplash.com/photo-1575867094974-9e16b6f55360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlZmlnaHRlciUyMHRyYWluaW5nfGVufDF8fHx8MTc2ODgzMzA1OXww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Firefighter training" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="bg-amber-600 text-white p-12 lg:p-20 flex items-center">
            <div>
              <Factory className="w-20 h-20 text-white mb-8" />
              <h3 className="text-4xl sm:text-5xl mb-8">Entreprises</h3>
              <ul className="space-y-4 text-xl">
                <li className="flex items-start gap-3">
                  <span className="text-white text-2xl">•</span>
                  <span>Rédaction DUERP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-2xl">•</span>
                  <span>Formations SST & incendie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-2xl">•</span>
                  <span>Audit sécurité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-2xl">•</span>
                  <span>Commissions de sécurité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-2xl">•</span>
                  <span>Conseils équipements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Associations */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="bg-gray-800 text-white p-12 lg:p-20 flex items-center order-2 lg:order-1">
            <div>
              <Users className="w-20 h-20 text-amber-400 mb-8" />
              <h3 className="text-4xl sm:text-5xl mb-8">Associations</h3>
              <ul className="space-y-4 text-xl text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Formations adaptées</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Gestion événements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Escape games sécurité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Sensibilisation jeunesse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Conseil bénévole</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-0 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1690973692388-239878450c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc2FmZXR5JTIwYXVkaXR8ZW58MXx8fHwxNzY4ODMzMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Fire safety audit" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Particuliers */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="relative min-h-[400px] lg:min-h-0">
            <img 
              src="https://images.unsplash.com/photo-1758521960456-c876c573e0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMHRyYWluaW5nfGVufDF8fHx8MTc2ODc2NjM5MHww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="VR training" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="bg-black text-white p-12 lg:p-20 flex items-center">
            <div>
              <User className="w-20 h-20 text-amber-400 mb-8" />
              <h3 className="text-4xl sm:text-5xl mb-8">Particuliers</h3>
              <ul className="space-y-4 text-xl text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Gestes qui sauvent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Formation incendie domestique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Conseils équipement maison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Exploitants agricoles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-2xl">•</span>
                  <span>Formation personnalisée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Full Width */}
      <div className="bg-amber-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl sm:text-5xl mb-8">Pourquoi nous faire confiance ?</h3>
          <p className="text-xl sm:text-2xl mb-10 leading-relaxed">
            L'actualité nous rappelle régulièrement l'importance de la formation, de l'information et surtout du respect de la réglementation incendie, principalement dans les ERP. La réglementation française fait partie des plus strictes et des plus complexes au monde. Nous sommes là pour vous aider à y voir clair et ne pas vous laisser abuser. Ce qui est efficace et obligatoire oui, mais pas plus.
          </p>
          <button 
            onClick={onContactClick}
            className="bg-white text-amber-600 px-12 py-5 rounded-none text-xl hover:bg-gray-100 transition-colors"
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
}
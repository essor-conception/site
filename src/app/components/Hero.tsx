import { Shield, GraduationCap, Handshake, Phone } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen pt-20">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1612466505848-c1c632fbfeba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlZmlnaHRlciUyMGhlcm8lMjBhY3Rpb248ZW58MXx8fHwxNzY4ODM0MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Firefighter in action" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white leading-tight">
              L'expertise sans la vente forcée
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200">
              Prévention. Incendie. Secours.<br />
              Conseil réglementaire neutre et formations immersives.
            </p>
            <button 
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-10 py-5 rounded-none text-lg hover:bg-amber-700 transition-colors"
            >
              Être rappelé gratuitement
            </button>
          </div>
        </div>
      </div>

      {/* Three Pillars - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 text-white">
              <Shield className="w-10 h-10 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Audit Neutre</h3>
                <p className="text-sm text-gray-300">Une expertise technique, pas commerciale.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-white">
              <GraduationCap className="w-10 h-10 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Formation Réaliste</h3>
                <p className="text-sm text-gray-300">Pédagogie active, VR, mises en situation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-white">
              <Handshake className="w-10 h-10 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Appui Décisionnel</h3>
                <p className="text-sm text-gray-300">L'allié des Élus et Chefs d'entreprise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import logoImage from 'figma:asset/cbcf7455b6a70a6885f5cea0e8273ef22c5e9d1b.png';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <img src={logoImage} alt="Essor Conception" className="h-20 mb-6 brightness-0 invert" />
            <p className="text-gray-400 text-lg mb-2">
              Prévention - Formation - Conseil
            </p>
            <p className="text-gray-500 text-lg">
              L'expertise sans la vente forcée
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-6 uppercase tracking-wider">Nos Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Audit & Conseil</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Formations Incendie</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Formations Secours</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">DUERP & PCS</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Formation VR</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-6 uppercase tracking-wider">Contact</h3>
            <p className="text-gray-400 mb-3 text-lg">
              Région Occitanie
            </p>
            <p className="text-gray-400 text-lg">
              Expert disponible sous 24h
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Essor Conception. Tous droits réservés.</p>
            <p className="text-gray-500 uppercase text-sm tracking-wider">
              Sapeur-Pompier • SSIAP 3 • Formateur de formateurs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    function: '',
    phone: '',
    timeSlot: '',
    subject: 'Formation'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez envoyer les données à un service backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        function: '',
        phone: '',
        timeSlot: '',
        subject: 'Formation'
      });
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl mb-2">Être rappelé gratuitement</h2>
            <p className="text-gray-600 mb-6">
              Une question sur vos obligations ? Un doute sur un devis ? Laissez-nous vos coordonnées, un expert vous rappelle sous 24h pour un premier échange gratuit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Nom *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <div>
                <label htmlFor="function" className="block text-sm mb-2">Fonction</label>
                <input
                  type="text"
                  id="function"
                  value={formData.function}
                  onChange={(e) => setFormData({...formData, function: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2">Numéro de téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <div>
                <label htmlFor="timeSlot" className="block text-sm mb-2">Créneau horaire souhaité</label>
                <input
                  type="text"
                  id="timeSlot"
                  placeholder="Ex: Lundi matin, 14h-16h..."
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2">Sujet *</label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                >
                  <option value="Formation">Formation</option>
                  <option value="Audit">Audit</option>
                  <option value="Conseil">Conseil</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition-colors"
              >
                Rappelez-moi
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✓</div>
            <h3 className="text-2xl mb-2">Merci !</h3>
            <p className="text-gray-600">
              Votre demande a été envoyée. Nous vous rappellerons sous 24h.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

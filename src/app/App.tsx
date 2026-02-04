import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Expertise } from '@/app/components/Expertise';
import { Services } from '@/app/components/Services';
import { Targets } from '@/app/components/Targets';
import { ContactModal } from '@/app/components/ContactModal';
import { FloatingContactButton } from '@/app/components/FloatingContactButton';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      <Hero onContactClick={() => setIsContactModalOpen(true)} />
      <Services />
      <Expertise />
      <Targets onContactClick={() => setIsContactModalOpen(true)} />
      <Footer />
      
      <FloatingContactButton onClick={() => setIsContactModalOpen(true)} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

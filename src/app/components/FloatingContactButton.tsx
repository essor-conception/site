import { Phone } from 'lucide-react';

interface FloatingContactButtonProps {
  onClick: () => void;
}

export function FloatingContactButton({ onClick }: FloatingContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-black text-white p-5 rounded-full shadow-2xl hover:bg-amber-600 transition-all hover:scale-110 z-40 flex items-center gap-3 group"
      aria-label="Être rappelé"
    >
      <Phone className="w-6 h-6" />
      <span className="hidden group-hover:inline-block whitespace-nowrap pr-2 uppercase text-sm tracking-wider">
        Contact
      </span>
    </button>
  );
}
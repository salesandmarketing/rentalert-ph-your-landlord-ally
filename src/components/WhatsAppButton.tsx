import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/639171234567"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[hsl(142,70%,42%)] text-white grid place-items-center shadow-gold hover:scale-105 transition-transform"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);
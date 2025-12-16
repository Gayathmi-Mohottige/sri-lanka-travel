import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/94727851045?text=Hello%20GYP%20Travels,%20I%20would%20like%20to%20plan%20a%20trip%20to%20Sri%20Lanka."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-2xl
        transition-all duration-300
        hover:scale-110
      "
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

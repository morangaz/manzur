import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="פתיחת וואטסאפ">
      <WhatsAppIcon />
      <span className="hidden sm:inline">לתיאום ייעוץ</span>
    </a>
  );
}

import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoProps {
  email: string;
  phone: string;
  address: string;
}

export default function ContactInfo({ email, phone, address }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-accent-color/10 flex items-center justify-center flex-shrink-0">
          <Mail className="w-6 h-6 text-accent-color" />
        </div>
        <div>
          <h4 className="font-mono text-sm text-accent-color/80 mb-1">Email</h4>
          <a href={`mailto:${email}`} className="font-serif text-text-color/80 hover:text-accent-color transition-colors">
            {email}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-accent-color/10 flex items-center justify-center flex-shrink-0">
          <Phone className="w-6 h-6 text-accent-color" />
        </div>
        <div>
          <h4 className="font-mono text-sm text-accent-color/80 mb-1">Telepon</h4>
          <a href={`tel:${phone}`} className="font-serif text-text-color/80 hover:text-accent-color transition-colors">
            {phone}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-accent-color/10 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-accent-color" />
        </div>
        <div>
          <h4 className="font-mono text-sm text-accent-color/80 mb-1">Alamat</h4>
          <p className="font-serif text-text-color/80">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
} 
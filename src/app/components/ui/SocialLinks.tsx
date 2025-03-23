import Link from 'next/link';

export default function SocialLinks() {
  const socials = [
    { name: 'Github', url: 'https://github.com/your-github', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-linkedin', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/your-twitter', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: 'https://instagram.com/your-instagram', icon: 'fab fa-instagram' },
  ];

  return (
    <div className="flex space-x-6">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-accent-color/10 flex items-center justify-center text-accent-color
                   hover:bg-accent-color/20 transition-colors duration-300"
          title={social.name}
        >
          <i className={`${social.icon}`}></i>
        </Link>
      ))}
    </div>
  );
} 
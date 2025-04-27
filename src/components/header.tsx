import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Image 
            src="/nexlearn.webp" 
            alt="NexLearn Logo" 
            width={150} 
            height={40} 
          />
        </div>

        {/* Button */}
        <div className="header-button">
          <Link href="/login">
            <button className="cta-button">Logout</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

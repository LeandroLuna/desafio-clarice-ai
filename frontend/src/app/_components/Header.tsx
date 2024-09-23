import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <div>
        <a href="/" className="text-lg font-bold">Meu Blog</a>
      </div>
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">Sobre</Link>
        <Link href="/contact">Contato</Link>
      </div>
    </nav>
  </header>
);

export default Header;

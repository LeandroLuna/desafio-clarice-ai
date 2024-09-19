import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Blog Simples",
  description: "Um blog construído com React e Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <div>
              <a href="/" className="text-lg font-bold">Meu Blog</a>
            </div>
            <div>
              <a href="/" className="mr-4">Home</a>
              <a href="/" className="mr-4">Sobre</a>
              <a href="/">Contato</a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4 flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
          © 2024 Meu Blog. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}

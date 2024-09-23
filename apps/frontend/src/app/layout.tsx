import '../../globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto p-4 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
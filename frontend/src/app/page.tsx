import ClientHome from './ClientHome';

export default function Home({ searchParams }: { searchParams: { page: string } }) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;

  return <ClientHome page={currentPage} />;
}

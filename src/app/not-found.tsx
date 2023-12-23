import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <h1 className="my-24 px-20 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 xl:text-start xl:text-4xl">
        <span className="text-secondary">404 </span>- Stránka nenalezena
      </h1>
      <p className="text-xl underline hover:text-primary">
        <Link href="/">Zpět na domovskou stránku</Link>
      </p>
    </section>
  );
}

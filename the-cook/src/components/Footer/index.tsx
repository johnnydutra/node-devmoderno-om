import Link from 'next/link';

export function Footer() {
  return (
    <footer className='pb-16 text-center'>
      <p>
        &copy; {new Date().getFullYear()} - <Link href='/'>Próximo Prato</Link>
      </p>
    </footer>
  );
}

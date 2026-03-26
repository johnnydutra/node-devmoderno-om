import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  const tailwindClasses = {
    h1: clsx(
      'text-4xl/normal font-extrabold py-8',
      'sm:text-5xl/normal sm:py-10',
      'md:text-6xl/normal md:py-12',
      'lg:text-7xl/normal lg:py-11',
    ),
  };

  return (
    <header>
      <h1 className={tailwindClasses.h1}>
        <Link href='#'>Próximo Prato</Link>
      </h1>
    </header>
  );
}

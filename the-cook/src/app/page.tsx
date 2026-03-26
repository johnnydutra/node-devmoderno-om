import { Container } from '@/components/Container';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>
          HEADER PLACEHOLDER LALALALALALALALALALA
        </h1>
      </header>

      <p className='text-justify py-'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime voluptas, vero voluptatem porro nulla atque,
        perspiciatis temporibus sit recusandae id magni in culpa minus quo nesciunt mollitia autem pariatur?
      </p>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>
          FOOTER PLACEHOLDER LALALALALALALALALALALALALA
        </p>
      </footer>
    </Container>
  );
}

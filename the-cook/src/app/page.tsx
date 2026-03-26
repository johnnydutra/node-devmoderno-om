import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <p className='text-justify py-'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime voluptas, vero voluptatem porro nulla atque,
        perspiciatis temporibus sit recusandae id magni in culpa minus quo nesciunt mollitia autem pariatur?
      </p>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>FOOTER PLACEHOLDER</p>
      </footer>
    </Container>
  );
}

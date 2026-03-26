import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 block text-sm/tight' dateTime='2025-04-20'>
            20/04/2025 10:00
          </time>
          <PostHeading url='#' as='h1'>
            Heading heading heading heading
          </PostHeading>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga pariatur dolorum mollitia deleniti eligendi ut
          laborum architecto ullam obcaecati, laudantium beatae quidem? Assumenda in, architecto earum esse nulla
          commodi soluta?
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>FOOTER</p>
      </footer>
    </Container>
  );
}

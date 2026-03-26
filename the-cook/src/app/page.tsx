import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div className={clsx('text-slate-900', 'bg-slate-300', 'min-h-screen')}>
      <header>
        <h1 className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>
          HEADER PLACEHOLDER LALALALALALALALALALA
        </h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>
          FOOTER PLACEHOLDER LALALALALALALALALALALALALA
        </p>
      </footer>
    </div>
  );
}

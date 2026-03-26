import { Header } from '@/components/Header';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

export default async function HomePage() {
  return (
    <div>
      <SpinLoader containerClassesToAdd={clsx('min-h-[500px]', 'bg-amber-500')} />
    </div>
  );
}

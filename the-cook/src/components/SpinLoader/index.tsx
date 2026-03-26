import clsx from 'clsx';

type SpinLoaderProps = {
  containerClassesToAdd?: string;
};

export function SpinLoader({ containerClassesToAdd = '' }: SpinLoaderProps) {
  const tailwindClasses = {
    container: clsx('flex', 'items-center', 'justify-center', containerClassesToAdd),
    spinner: clsx(
      'w-10',
      'h-10',
      'border-5',
      'border-t-transparent',
      'border-slate-900',
      'rounded-full',
      'animate-spin',
    ),
  };

  return (
    <div className={tailwindClasses.container}>
      <div className={tailwindClasses.spinner}></div>
    </div>
  );
}

import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({ children, url, as: Tag = 'h2' }: PostHeadingProps) {
  const tailwindClasses = {
    h1: clsx('text-2xl/tight font-extrabold sm:text-4xl'),
    h2: clsx('text-2xl/tight font-extrabold sm:text-4xl'),
  };

  return (
    <Tag className={tailwindClasses[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}

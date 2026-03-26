import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  const tailwindClasses = {
    link: clsx(`w-full h-full overflow-hidden rounded-xl ${linkProps.className}`),
    image: clsx(`w-full h-full object-cover object-center group-hover:scale-105 transition ${imageProps.className}`),
  };

  return (
    <Link {...linkProps} className={tailwindClasses.link}>
      <Image {...imageProps} className={tailwindClasses.image} />
    </Link>
  );
}

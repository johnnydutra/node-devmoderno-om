import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'test';
  const postLink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'Alt da imagem',
          priority: true,
        }}
      />

      <div className='flex flex-col gap-4 sm:justify-center'>
        <time className='text-slate-600 block text-sm/tight' dateTime='2025-04-20'>
          20/04/2025 10:00
        </time>

        <PostHeading as='h1' url={postLink}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </PostHeading>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas iusto modi magnam veniam. Iste, temporibus
          repellat eligendi aperiam aut repellendus eos totam quam, ex dolores facilis itaque quas, consequuntur
          laudantium!
        </p>
      </div>
    </section>
  );
}

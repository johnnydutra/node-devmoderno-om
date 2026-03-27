import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { PostSummary } from '../PostSummary';

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

      <PostSummary
        createdAt={'2025-02-11T20:59:30'}
        excerpt={
          'Isso deixa o fluxo de trabalho mais natural, especialmente para quem já está acostumado com a estrutura de pastas e arquivos.'
        }
        postHeading='h2'
        postLink={postLink}
        title={'O papel do silêncio em uma vida criativa'}
      />
    </section>
  );
}

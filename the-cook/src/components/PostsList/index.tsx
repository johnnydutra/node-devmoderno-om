import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { formatDateRelativeToNow, formatDateTime } from '@/helpers/format-date-time';
import { PostSummary } from '../PostSummary';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <section className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSummary
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              postHeading='h2'
              postLink={postLink}
              title={post.title}
            />
          </div>
        );
      })}
    </section>
  );
}

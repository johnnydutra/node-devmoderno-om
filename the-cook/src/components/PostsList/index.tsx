import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublishedPostsCached } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublishedPostsCached();

  return (
    <section className='grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
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

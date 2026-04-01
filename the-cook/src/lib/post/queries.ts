import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublishedPostsCached = cache(async () => await postRepository.findAllPublished());

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlugPublished(slug).catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findPostByIdCached = cache(async (id: string) => await postRepository.findById(id));

import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findAllPublishedPostsCached = cache(async () => await postRepository.findAllPublished());

export const findPostBySlugCached = cache(async (slug: string) => await postRepository.findBySlug(slug));

export const findPostByIdCached = cache(async (id: string) => await postRepository.findById(id));

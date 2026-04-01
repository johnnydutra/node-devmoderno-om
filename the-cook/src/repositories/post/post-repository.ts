import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublished(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublished(slug: string): Promise<PostModel>;
}

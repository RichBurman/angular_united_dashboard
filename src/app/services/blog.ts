import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { BehaviorSubject, Observable } from 'rxjs';

export type BlogPostInput = Omit<BlogPost, 'id'>;

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: 'United Start the Season With Loss',
    date: '2026-08-24',
    excerpt:
      'Manchester United began the 2026/27 Premier League season with a loss to Hull City.',
    content:
      'Manchester United began the 2026/27 Premier League season with a loss to Hull City. Here are my thoughts on the opening game and what I want to see from United this season.',
  },
  {
    id: 2,
    title: 'What I Want From United This Season',
    date: '2026-08-18',
    excerpt:
      'My expectations for Manchester United heading into the 2026/27 season.',
    content:
      'There is plenty to be excited about heading into the new season. In this article I look at what I want to see from Manchester United across the campaign.',
  },
  {
    id: 3,
    title: 'Five Things I Am Watching This Season',
    date: '2026-08-15',
    excerpt:
      'Five things I will be keeping an eye on throughout the 2026/27 campaign.',
    content:
      'From new signings to tactical changes, there are plenty of interesting things to watch this season. These are five areas I will be paying particular attention to.',
  },
  {
    id: 4,
    title: 'The New Season Is Finally Here',
    date: '2026-08-10',
    excerpt:
      'The wait is over. The Premier League is back and Manchester United have a new season ahead of them.',
    content:
      'After a long summer, competitive football is finally back. There is always something exciting about the start of a new Premier League season, and this one is no different.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private postsSubject = new BehaviorSubject<BlogPost[]>(this.loadPosts());

  getPosts(): Observable<BlogPost[]> {
    return this.postsSubject.asObservable();
  }

  createPost(post: BlogPostInput): void {
    const posts = this.postsSubject.value;
    const id = Math.max(0, ...posts.map((existingPost) => existingPost.id)) + 1;
    this.savePosts([{ id, ...post }, ...posts]);
  }

  updatePost(id: number, post: BlogPostInput): void {
    this.savePosts(
      this.postsSubject.value.map((existingPost) =>
        existingPost.id === id ? { id, ...post } : existingPost,
      ),
    );
  }

  deletePost(id: number): void {
    this.savePosts(
      this.postsSubject.value.filter((existingPost) => existingPost.id !== id),
    );
  }

  private loadPosts(): BlogPost[] {
    const storedPosts = localStorage.getItem('united-hub-blog-posts');

    if (!storedPosts) {
      return defaultPosts;
    }

    try {
      return JSON.parse(storedPosts) as BlogPost[];
    } catch {
      return defaultPosts;
    }
  }

  private savePosts(posts: BlogPost[]): void {
    localStorage.setItem('united-hub-blog-posts', JSON.stringify(posts));
    this.postsSubject.next(posts);
  }
}

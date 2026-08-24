import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'United Start the Season With Loss',
      date: '2026-08-24',
      excerpt:
        'Manchester United began the 2026/27 Premier League season with a loss to Hull City.',
      content:
        'Manchester United began the 2026/27 Premier League season with a loss to Hull City. Here are my thoughts on the opening game and what I want to see from United this season.',
    },
  ];

  getPosts(): Observable<BlogPost[]> {
    return of(this.posts);
  }
}
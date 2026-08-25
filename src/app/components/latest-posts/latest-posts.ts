import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

import { BlogService } from '../../services/blog';
import { BlogPost } from '../../models/blog-post';

@Component({
  selector: 'app-latest-posts',
  imports: [RouterLink, DatePipe],
  templateUrl: './latest-posts.html',
  styleUrl: './latest-posts.css',
})
export class LatestPosts implements OnInit {
  private blogService = inject(BlogService);

  posts = signal<BlogPost[]>([]);

  ngOnInit() {
    this.blogService.getPosts().subscribe((posts) => {
      const latestPosts = [...posts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

      this.posts.set(latestPosts);
    });
  }
}

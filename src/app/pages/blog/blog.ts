import { Component, inject, OnInit, signal } from '@angular/core';

import { BlogService } from '../../services/blog';
import { BlogPost } from '../../models/blog-post';
import { BlogCard } from '../../components/blog-card/blog-card';

@Component({
  selector: 'app-blog',
  imports: [BlogCard],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {

  private blogService = inject(BlogService);

  posts = signal<BlogPost[]>([]);

  loading = signal(true);

  error = signal(false);

  ngOnInit() {
    this.blogService.getPosts().subscribe({

      next: (data) => {
        this.posts.set(data);
        this.loading.set(false);
      },

      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },

    });
  }
}
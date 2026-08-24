import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../../services/blog';
import { BlogPost } from '../../models/blog-post';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  imports: [DatePipe, RouterLink],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.css',
})
export class BlogPostPage implements OnInit {

  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  post = signal<BlogPost | undefined>(undefined);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.blogService.getPosts().subscribe((posts) => {
      const post = posts.find((post) => post.id === id);

      this.post.set(post);
    });
  }
}
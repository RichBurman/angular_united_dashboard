import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogPost } from '../../models/blog-post';
import { BlogPostInput, BlogService } from '../../services/blog';
import { AdminAuthService } from '../../services/admin-auth';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  private blogService = inject(BlogService);
  readonly authService = inject(AdminAuthService);

  posts = signal<BlogPost[]>([]);
  loginUsername = '';
  loginPassword = '';
  loginError = signal('');
  editingId = signal<number | null>(null);
  form: BlogPostInput = this.emptyPost();

  constructor() {
    this.blogService.getPosts().subscribe((posts) => this.posts.set(posts));
  }

  login(): void {
    if (!this.authService.login(this.loginUsername, this.loginPassword)) {
      this.loginError.set('Incorrect username or password.');
    }
  }

  startNewPost(): void {
    this.editingId.set(null);
    this.form = this.emptyPost();
  }

  editPost(post: BlogPost): void {
    this.editingId.set(post.id);
    this.form = { ...post };
  }

  savePost(): void {
    if (this.editingId() === null) {
      this.blogService.createPost(this.form);
    } else {
      this.blogService.updatePost(this.editingId()!, this.form);
    }

    this.startNewPost();
  }

  deletePost(post: BlogPost): void {
    if (window.confirm(`Delete "${post.title}"?`)) {
      this.blogService.deletePost(post.id);
    }
  }

  logout(): void {
    this.authService.logout();
    this.startNewPost();
  }

  private emptyPost(): BlogPostInput {
    return {
      title: '',
      date: new Date().toISOString().slice(0, 10),
      excerpt: '',
      content: '',
    };
  }
}
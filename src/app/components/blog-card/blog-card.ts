import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BlogPost } from '../../models/blog-post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCard {
  post = input.required<BlogPost>();
}
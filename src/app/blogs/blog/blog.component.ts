import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void { }

  removeBlog(blog) {
    this.blogService.removeFromId(blog);
  }
}

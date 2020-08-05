import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog;

  rating = [1, 2, 3, 4, 5];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void { }

  editBlog(id: number) {
    this.router.navigate(['create-blog', id]);
  }

  deleteBlog(blog) {
    this.blogService.deteleBlog(blog);
  }

  onClickStar(i: number) {
    if (this.blog.rating === i) {
      this.blog.rating = 0;
    } else {
      this.blog.rating = i;
    }
  }
}

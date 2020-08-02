import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog;
  // @Output() delectBlog = new EventEmitter();
  rating = [1, 2, 3, 4, 5];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void { }

  deleteBlog(blog) {
    // this.delectBlog.emit();
    console.log("DELETE");
    this.blogService.deteleBlog(blog);
  }
  onClickStar(i: number) {
    if (this.blog.rating === i) {
      this.blog.rating = 0;
    } else {
      this.blog.rating = i;
    }
    console.log(i)
  }
}

import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {

  constructor(public blogsService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickBlog(id: number) {
    this.router.navigate(['view-blog', id]);
  }

  onclickCreate() {
    this.router.navigate(['create-blog']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  currentBlog: Blog = null;
  blogId: number;

  constructor(private activeRoter: ActivatedRoute, public blogService: BlogService) { }

  ngOnInit(): void {
    const routeParams = this.activeRoter.snapshot.params;
    this.blogId = routeParams.id;
  }

}

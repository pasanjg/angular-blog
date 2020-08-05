import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../service/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {


  blogForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    date: new FormControl(),
    imgUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  blogId: number = null;
  blog: Blog;
  constructor(private blogService: BlogService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.params;
    this.blogId = routeParams.id;
    this.blog = this.blogService.getBlog(this.blogId);
    this.setUpdateValues();
  }

  setUpdateValues() {
    if (this.blogId != null) {
      this.blogForm.controls.id.setValue(this.blogId);
      this.blogForm.controls.title.setValue(this.blog.title);
      this.blogForm.controls.imgUrl.setValue(this.blog.imgUrl);
      this.blogForm.controls.description.setValue(this.blog.description);
      this.blogForm.controls.date.setValue(this.blog.date);
    }
  }

  onFormSubmit() {
    if (this.blogForm.valid) {
      if (this.blogId != null) {
        this.blogService.updateBlog(this.blogForm.value)
        this.router.navigate([''])
      } else {
        this.blogForm.controls.id.setValue(this.getId() + 1);
        this.blogForm.controls.date.setValue(new Date());
        this.blogService.addBlog(this.blogForm.value)
        this.router.navigate([''])
      }
    } else {
      console.log(this.blogForm.valid)
    }

  }

  getId() {
    return Math.max.apply(Math, this.blogService.blogs.map(function (o) { return o.id; }))
  }

  get imageUrl() {
    return this.blogForm.value.imgUrl;
  }
}

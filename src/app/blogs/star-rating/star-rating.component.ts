import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() blog;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    console.log(this.blog.id)
    this.selectedValue = this.blog.rating;
    console.log(this.selectedValue)
  }

  countStar(star) {
    this.selectedValue = star;
    if (this.selectedValue == this.blog.rating) {
      this.selectedValue = 0;
      star = 0;
    }
    this.blogService.setRating(this.blog.id, this.selectedValue)
  }

}

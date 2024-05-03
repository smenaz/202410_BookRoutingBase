import { Component, Input, OnInit } from '@angular/core';
import { AuthorDetail } from '../author-detail';
import { AuthorService } from '../author.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  authorId!: string;
  @Input() authorDetail!: AuthorDetail;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) {}


  getAuthor() {
    this.authorService.getAuthor(this.authorId).subscribe(author => {
      this.authorDetail = author;
      console.log("this.authorDetail:",this.authorDetail);
    });
  }

  ngOnInit() {
    if(this.authorDetail === undefined) {
      this.authorId = this.route.snapshot.paramMap.get('id')!
      console.log("this.authorId:", this.authorId)
      if(this.authorId) {
        this.getAuthor()
      }
    }
  }
}

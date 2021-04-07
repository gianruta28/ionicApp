import { Component, OnInit, Input } from '@angular/core';

import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
  }

  voteUp() {
    this.article.voteUp();
  }

  voteDown(){
    this.article.voteDown();
  }

  ngOnInit() {}

}

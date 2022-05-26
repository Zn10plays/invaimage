import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../database/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  public author!: {url: string, name: string};

  constructor() { }

  ngOnInit(): void {
    
  }

}

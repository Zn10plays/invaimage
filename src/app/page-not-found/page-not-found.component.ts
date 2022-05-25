import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  public getError() : string {
    return "The following path: \"" + this.router.url + " \" does not exist."; 
  }
}

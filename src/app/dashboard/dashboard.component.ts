import { Component, OnInit } from '@angular/core';
import { AccountManagementService } from '../accounts/account-management.service';
import { DatabaseService } from '../database/database.service';
import { Post } from '../database/post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(private database: DatabaseService, private account: AccountManagementService) { }

  ngOnInit(): void {
    setTimeout(() => {
      if (!this.account.currentUser) return;
      this.database.getPosts(this.account.currentUser?.uid)
      .then(posts => {
        this.posts = posts?.map(post => post.data())
      })
    }, 500)
  }

}

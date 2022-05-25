import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  control = new FormControl('', [Validators.required])

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
  }

  public handleSubmit() {
    this.database.addTextAsPost(this.control.value);
    this.resetForm()
  }

  private async resetForm() {
    this.control.setValue('')
  }
}

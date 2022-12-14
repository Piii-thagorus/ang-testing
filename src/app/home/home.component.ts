import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users : any;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

      this.usersService.all().subscribe(res => {
          this.users = res;
      })
  }

}

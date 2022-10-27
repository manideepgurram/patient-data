import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: any;
  loggedin: any;
  constructor() {}
  ngOnInit(): void {
    this.loggedin = localStorage.getItem('loggedin');
    console.log(this.loggedin);
    this.username = localStorage.getItem('username');

  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }

}

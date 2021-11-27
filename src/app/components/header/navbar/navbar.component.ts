import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
islogin  =true;
  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    this.islogin = !this.islogin;
    console.log("your are Logout");
    
  }
}

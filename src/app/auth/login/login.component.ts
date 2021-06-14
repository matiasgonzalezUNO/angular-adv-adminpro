import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function customInitFunction();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    // console.log('submit');
    console.log('LoginComponent ngOnInit():::call=>customInitFunction()');
      customInitFunction();
    this.router.navigateByUrl('/');
  }

}

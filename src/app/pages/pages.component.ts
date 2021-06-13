import { Component, OnInit } from '@angular/core';
import { SetttingService } from '../services/settting.service';

declare function customInitFunction();
  

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  year = new Date().getFullYear();
  
  constructor( private settingService: SetttingService) { }

  ngOnInit(): void {
    customInitFunction();
  }

}

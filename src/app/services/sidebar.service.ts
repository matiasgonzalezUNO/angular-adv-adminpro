import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'main', url:'/' },
        { titulo: 'progressBar', url:'/dashboard/progress' },
        { titulo: 'grafica', url:'/dashboard/grafica1' },
      ]
    }
  ];

  constructor() { }
}

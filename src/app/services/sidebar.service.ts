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
        { titulo: 'Dash main', url:'/' },
        { titulo: 'Grafica', url:'/dashboard/grafica1' },
        { titulo: 'Promesas', url:'/dashboard/promesas' },
        { titulo: 'ProgressBar', url:'/dashboard/progress' },
        { titulo: 'Rxjs', url:'/dashboard/Rxjs' },
      ]
    }
  ];

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.pruebaPromesas();
    // opc 1
    // this.getUsuarios();
    // opc 2
    this.getUsuarios().then( users => {
      console.log(users)
    });

  }

  getUsuarios() {

    // opcion 1!
    // fetch('https://reqres.in/api/users')
    //   .then( response => {
    //     // console.log('tengo Data: ', response));
    //     response.json().then(
    //       body => { console.log(body); });
    //   });
    
    // opcion 2!
    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve(body.data) )
    });

    return promesa;
  }



  pruebaPromesas(): void {
        // const promesa = new Promise( ( resolve, reject ) => {
    //   const num = Math.random() * 10;
    //   console.log('num ',num);
    //   if( num >= 2) {
    //     resolve('hola mundo');
    //   } else {
    //     reject('Algo salio mal en hola mundo');
    //   }
      
    // });

    // promesa.then((mensaje) => {
    //   console.log('mens:',mensaje);
    //   console.log('hey termine ');
    // })
    // .catch(error => console.log('error en mi promesa', error));
    // console.log('fin ngOnInit');
  }

}



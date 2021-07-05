import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private serviceGifs: GifsService) { }

  get historial(){
    return this.serviceGifs.historial;
  }

  buscar(item: string){
    console.log(item);
    this.serviceGifs.buscarGifs(item);
  }

}

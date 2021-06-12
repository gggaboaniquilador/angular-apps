import { Component, OnInit } from '@angular/core';
import * as mapboxgl  from "mapbox-gl";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
  #mapa{
    width: 100%;
    height: 100%;
  }
  `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -72.22202693473784,7.76208276649695 ],
      zoom: 18
    });

  }

}

declare const google: any
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { GoogleMapsService } from './google-maps.service'

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.scss'
})
export class GoogleMapsComponent  implements OnInit {
  zoom = 16;
  center: google.maps.LatLngLiteral = {
    lat: -23.72434537280109,
    lng: -46.67844822991959
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 20,
    minZoom: 8,
    tilt: 0,
  };

  constructor(private googleMapsService: GoogleMapsService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

        // Inicia o mapa com o centro na localização do estabelecimento
        this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: this.center,
          zoom: this.zoom,
          ...this.options
        });

        // Adiciona o marcador na localização do estabelecimento
        this.addMarker();
}
  // Mapa e marcador
  map!: google.maps.Map;
  marker!: google.maps.Marker;


  // Função para adicionar o marcador do estabelecimento
  addMarker() {
    const myEstablishmentLocation = {
      lat: -23.72434537280109,
      lng: -46.67844822991959
    };

    this.marker = new google.maps.Marker({
      position: myEstablishmentLocation,  // Localização do estabelecimento
      map: this.map,  // Exibe no mapa
      title: 'Alta Construções e Reformas',  // Texto do marcador
    });
  }

}

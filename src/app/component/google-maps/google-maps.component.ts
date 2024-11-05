import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { environment } from '../../../environments/environment';

declare const google: any;

interface Window {
  initMap: () => void;
}

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
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

  map!: google.maps.Map;

  ngOnInit() {
    this.loadGoogleMapsApi().then(() => {
      this.initializeMap();
    }).catch((error) => {
      console.error('Error loading Google Maps API', error);
    });
  }

  private loadGoogleMapsApi(): Promise<void> {
    return new Promise((resolve, reject) => {
      (window as any).initMap = () => {
        resolve();
      };
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&callback=initMap&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.onerror = (error) => reject(error);
      document.head.appendChild(script);
    });
  }

  private initializeMap() {
    const mapId = 'ae8b216e9b45546e';

    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: this.center,
      zoom: this.zoom,
      ...this.options,
      mapId: mapId
    });

    this.addMarker();
  }

  private addMarker() {
    const myEstablishmentLocation = {
      lat: -23.72434537280109,
      lng: -46.67844822991959
    };

    const marker = new google.maps.Marker({
      position: myEstablishmentLocation,
      map: this.map,
      title: 'Alta Construções e Reformas'
    });

    const infoWindow = new google.maps.InfoWindow({
      content: '<strong>Alta Construções e Reformas</strong>',
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}

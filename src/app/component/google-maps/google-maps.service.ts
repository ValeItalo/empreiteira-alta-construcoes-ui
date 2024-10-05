import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  loadMapsApi(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof google === 'object' && typeof google.maps === 'object') {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        resolve();
      };

      script.onerror = (error: any) => {
        reject(error);
      };

      document.head.appendChild(script);
    });
  }
}

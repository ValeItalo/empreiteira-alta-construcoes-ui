import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {

  pictures = [
    {
      src:'../../../assets/img/galeria-cliente-1.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-13.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-3.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-15.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-5.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-6.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-7.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-8.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-9.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-10.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-11.png',
      alt:'banner do site alta construcoes'
    },
    {
      src:'../../../assets/img/galeria-cliente-12.png',
      alt:'banner do site alta construcoes'
    },
]
}

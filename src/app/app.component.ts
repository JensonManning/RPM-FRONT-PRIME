import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, AccordionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RPM-FRONT-PRIME';
  constructor(
    private primeng : PrimeNG,
    private http: HttpClient
  ) {
    this.primeng.ripple.set(true);
  }
}

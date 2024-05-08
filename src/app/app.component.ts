import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MovieBookingSystem';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Movie Booking System');
  }
}

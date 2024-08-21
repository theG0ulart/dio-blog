import { Component, Inject, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './ui/footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent, 
    FormsModule, 
    RouterModule, 
    FooterComponent, 
  ],
  providers: [
    HttpClient,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dio-blog';

}

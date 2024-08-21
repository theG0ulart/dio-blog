import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchQuery: string = '';
  isNavbarOpen = false;

  // Método chamado quando o botão de busca é clicado
  onSearch() {
    console.log('Search for:', this.searchQuery);
    // Aqui você pode adicionar a lógica para lidar com a pesquisa,
    // como navegar para uma página de resultados ou filtrar uma lista
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}

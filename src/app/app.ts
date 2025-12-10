import { Component, input, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,RouterLinkActive,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = 'massimo';
  cost: number = 200;
  isLoading: boolean = false;
  inputValue: string = '';
  content: string = '';

  handleClick() {
    this.isLoading = !this.isLoading;
    this.content = `
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${this.inputValue}</h5>
    <p class="card-text">Welkom, ${this.name}, dit is je aankoopbewijs</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
  }

  resetClick() {
    this.inputValue = '';
    this.content = '';
  }

}

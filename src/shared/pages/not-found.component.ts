import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fth-not-found',
  standalone: true,
  template: `
    <div id="notfound-area">
      <ul id="notfound-circles">
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
        <li class="notfound-li"></li>
      </ul>
      <div class="container">
        <div class="center">
          <p class="status">404</p>
          <b>Página não Encontrada. Clique para <a (click)="back()">ir ao início</a></b>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .center {
      z-index: 1;
      text-align: center;
    }

    .status {
      margin: 0;
      padding: 0;
      font-size: 110px;
      font-weight: bold;
    }
  `]
})
export class NotFoundComponent {

  constructor(private router: Router) {
  }

  protected back(): void {
    this.router.navigate(['/']);
  }
}

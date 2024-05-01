import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'fth-private-comp',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome</h1>
    <router-outlet/>
  `
})
export class PrivateComponent {
}

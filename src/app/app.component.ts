import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperadorElvisComponent } from "./operador-elvis/operador-elvis.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OperadorElvisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Elvis';
}

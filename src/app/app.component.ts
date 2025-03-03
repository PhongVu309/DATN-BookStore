import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutHeaderComponent } from "./component/layout-header/layout-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookStore';
}

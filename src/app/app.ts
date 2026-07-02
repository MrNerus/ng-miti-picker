import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MitiPicker } from "./components/miti-picker/miti-picker";
import { DraggableCard } from "./components/draggable-card/draggable-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MitiPicker, DraggableCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-miti-picker');
}

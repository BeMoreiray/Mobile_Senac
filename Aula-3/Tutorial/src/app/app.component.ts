import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Alertas', url: 'alerta', icon: 'chatbox'},
    { title: 'Home', url: 'home', icon: 'home'},
    { title: 'Navegacao', url: 'navegacao', icon: 'locate'},
    {title: 'Buttons', url: 'buttons', icon:'bug'}
  ];
  public labels = [ 'senac'];
  constructor() {}
}
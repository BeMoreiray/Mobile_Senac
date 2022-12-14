import { Component } from '@angular/core';
import { title } from 'process';
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
    {title: 'Botões', url: 'buttons', icon:'bug'},
    {title: 'Ação', url: 'acao', icon: 'alert-circle'},
    {title: 'Badge', url: 'badge', icon: 'ellipsis-horizontal-circle'}
  ];
  public labels = [ 'senac'];
  constructor() {}
}
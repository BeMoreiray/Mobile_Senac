import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alerta: AlertController) { }

  ngOnInit() {
  }
  /*async - método usada para sincronizar os eventos que estão acontecendo duarante o alert
  await - método usada para programar o tempo de espera do evento*/
  async exibir(){
    const mensagem = await this.alerta.create({
      header: 'Alerta',
      subHeader: 'Mensagem',
      message: 'Olá usuário monstro',
      buttons: ['Ok']
    });
     /*present - método ionic utilizado para exibir a o evento da função*/
    mensagem.present();
   
  }

  /*Adicionando mais um botão ao alerta----------------- */
  async exibirCustom(){
    const mensagem = await this.alerta.create({
      header: 'Mensagem',
      message: 'Deseja realmente sair',
      buttons: ['ok', 'cancelar']
    });
    mensagem.present();
  }

  /*Adicionando um evento aos botões -------------*/ 
  async exibirComplete(){
    const mensagem = await this.alerta.create({
      header: 'Confirma',
      message: 'Confirma a gravação?',
      buttons: [{text: 'ok', handler: () => {console.log('Vou gravar!')}},
                {text: 'cancelar', handler: () => {console.log('Desista!'); }}]
    });
    mensagem.present();
  }
}

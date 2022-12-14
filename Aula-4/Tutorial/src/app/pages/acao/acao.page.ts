import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {

  constructor(private acao: ActionSheetController) { }

  ngOnInit() {
  }

  async exibirMenu(){
    const actionSheet = await this.acao.create({
      header: 'fotos',
      buttons:[
                {text: 'Apagar', icon: 'trash', handler:() => {console.log('Clicou em apagar');}},
                {text: 'Compartilhar', icon: 'share', handler:() => {console.log('Clicou em compartilhar');}},
                {text: 'Exibir', icon: 'camera', handler:() => {console.log('Clicou em exibir');}}
              ]
    });
    actionSheet.present();
  }
}

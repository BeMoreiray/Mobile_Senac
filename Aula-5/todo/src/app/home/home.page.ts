import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayTarefa = [
    {tarefa: 'tomar banho'},
    {tarefa: 'escovar os dentes'},
    {tarefa: 'ir para escola'} 
  ]

  constructor(private alertController: AlertController, private toastController: ToastController) {}
   async showAdd(){
    const alert = await this.alertController.create({
      header: 'O que deseja fazer?',
      inputs:[
              {name: 'task', type: 'text', placeholder: 'Digite a tarefa'},
            ],
      buttons:[
                {text: 'Cancelar', handler:() => {console.log('Cancelou...')}},
                {text: 'Adicionar', handler:(form) => {this.incluir(form.task)}}
              ]
    });
    alert.present();
  }

  async incluir(newTask : string){
    /*const alert = await this.alertController.create({
      header: "ERROR",
      message: "Seu item está em branco",
      buttons: ["Voltar"]  
    })*/

    /*trim é uma ferramenta utilizada para tirar os espaços em branco digitados pelo usuario*/
    if(newTask.trim().length < 1){
      /*alert.present();*/
      const toast = await this.toastController.create({
        message: 'informe a tarefa!',
        /*alert com tempo de duração na tela, como se fosse um popup*/
        duration: 2000,
        position: 'top'
      })
      toast.present();
    }else{
      this.arrayTarefa.push({tarefa : newTask});
      
    }
  }

  /*
  apagar(elemento : string){
    const i = this.arrayTarefa.indexOf();
  }*/
}

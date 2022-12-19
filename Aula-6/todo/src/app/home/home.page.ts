import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayTarefa = new Array();
  

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
      this.arrayTarefa.push({tarefa : newTask, done: false});
      
    }
  }

  apagar(task: any){
    for(let i = 0; i < this.arrayTarefa.length; i++){
      if(task.tarefa == this.arrayTarefa[i].tarefa){
        this.arrayTarefa.splice(i, 1);
      }
    }
  }
  alterarStatus(task: any){
    task.done = !task.done; 
    /*if(task.done == false){
      task.done = true;
    }else{
      task.done = false;
    }*/
  }

  arrayParaJson(){
    let valor = [{nome: 'carlos'}, {nome: 'josé'}];
    let jstring = '';

    jstring = '[';
    for(let i = 0; i < valor.length; i++){
        jstring = jstring + "{";
        jstring = jstring + "nome";
        jstring = jstring + valor[i].nome;
        jstring = jstring + "}";
    }
    jstring = jstring + ']'
    
    console.log(jstring)
  }
}

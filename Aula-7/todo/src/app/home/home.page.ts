import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayTarefa: any[] = [];
  

  constructor(private alertController: AlertController, private toastController: ToastController) {
    this.lerLocalStorage();
  }
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
    if(newTask.trim().length < 1){
      const toast = await this.toastController.create({
        message: 'informe a tarefa!',
        duration: 2000,
        position: 'top'
      })
      toast.present();
    }else{
      this.arrayTarefa.push({tarefa : newTask, done: false});
      this.atualizarLocalStorage();
      
    }
  }

  apagar(task: any){
    for(let i = 0; i < this.arrayTarefa.length; i++){
      if(task.tarefa == this.arrayTarefa[i].tarefa){
        this.arrayTarefa.splice(i, 1);
      }
      this.atualizarLocalStorage();
    }
  }
  alterarStatus(task: any){
    task.done = !task.done; 
     this.atualizarLocalStorage();
  }
  atualizarLocalStorage(){
    localStorage.setItem('arrayDB', JSON.stringify(this.arrayTarefa));
  }
  lerLocalStorage(){
    this.arrayTarefa = JSON.parse(localStorage.getItem('arrayDB') || '[]');
  }

  buscarLocalStorage(){
    
  }
}

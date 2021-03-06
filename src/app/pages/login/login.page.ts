import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, {static: false}) slides: IonSlides;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor( 
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService
    ) { }

  ngOnInit() { }
  segmentChanged(event: any){
    if (event.detail.value === "login"){
      this.slides.slidePrev();
    } else{
      this.slides.slideNext();
    }
  }

  async login(){
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch(error ){
      console.error(error);
      let message: string;
      switch(error.code){
        case 'auth/email-already-in-use': 
          message = 'E-mail já utilizado!';
          break;
        case 'auth/invalid-email':
          message = 'E-mail inválido!';
          break;
        case 'auth/weak-password':
          message = 'Senha inválida! Por favor, digite uma com mais de 6 caracteres!'
          break;
      }

      this.presentToast(message);

    } finally{
      this.loading.dismiss();
    }
    

  }

  async register(){
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch(error ){
      console.error(error);
      let message: string;
      switch(error.code){
        case 'auth/email-already-in-use': 
          message = 'E-mail já utilizado!';
          break;
        case 'auth/invalid-email':
          message = 'E-mail inválido!';
          break;
        case 'auth/weak-password':
          message = 'Senha inválida! Por favor, digite uma com mais de 6 caracteres!'
          break;
      }

      this.presentToast(message);

    } finally{
      this.loading.dismiss();
    }
    
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Por favor, aguarde...'});
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}



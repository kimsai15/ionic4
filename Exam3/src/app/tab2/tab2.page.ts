import { Component } from '@angular/core';
import { StudActivityService } from "../services/stud-activity.service";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  AM = {};
  constructor(private apiSV: StudActivityService, private alertController: AlertController) {
    
   }


  async presentAlert(mag:string) {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: mag,
      buttons: ['ปิด']
    });

    await alert.present();
  }

  logForm() {
    console.log(this.AM)
      this.apiSV.SaveData(this.AM).subscribe((res) => {
        console.log(this.AM);
        console.log(res)
        if (res == "ok") {
          this.presentAlert("บันทึกข้อมูลเรียบร้อย");
        }
        else {
          this.presentAlert("เกิดข้อผิดพลาด");
        }
      },
        err => {
          console.log("error");
          this.presentAlert("เกิดข้อผิดพลาด");
  
        }
      );
    }
  }


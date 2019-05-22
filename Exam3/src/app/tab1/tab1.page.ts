import { Component } from '@angular/core';
import { StudActivityService } from "../services/stud-activity.service";
import { Subscription } from 'rxjs';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Subscription: Subscription;
  List: any = [];
  constructor(private apiAM: StudActivityService) {
    this.Showvalue();

  }
  Showvalue() {
    this.Subscription = this.apiAM.GetDataAPI().subscribe(
      data => {
        this.List = data; console.log(data);
      })
  }

  del(id) {
    this.Subscription = this.apiAM.DelData(id).subscribe(
      data => {
        console.log(id);
          this.Showvalue();
      });
  }
}


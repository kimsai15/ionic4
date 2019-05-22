import { Injectable } from '@angular/core';
import {HttpClient} from"@angular/common/http";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudActivityService {
  tmp:{};
  API_URL:string ="http://localhost:60448/api/";
  constructor(private http:HttpClient) { }
  GetDataAPI(){
    const header = {'content-type':'application/json'}
    return this.http.get(this.API_URL+"Animal");
  }

  SaveData(Animal){console.log("rel  ="+Animal.Name)
     return this.http.post(this.API_URL+"Animal",Animal);
   }

   DelData(id){
     console.log("del ="+id);
    return this.http.delete(this.API_URL+"Animal/"+id);
   }
  
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Aide } from '../model/Aide';

@Injectable({
  providedIn: 'root'
})
export class AideService {

  readonly url="http://localhost:8082/SpringMVC/Aide"
  constructor(private http: HttpClient) { }

  getAide(){
    return this.http.get<Aide[]>(this.url+'/retrieve-aide')
  }

  getAideClasse(){
    return this.http.get<Aide[]>(this.url+'/getAllAideClasse')
  }
  addAide(aide:Aide){
    return this.http.post(this.url+'/Add-Aide',aide)
  }
  deleteAide(id: any) {
    return this.http.delete(this.url+'/removeAide/'+id)
  }

  getAideById(id:number){
    return this.http.get<Aide>(this.url+'/retrieve-Aide/'+id);
  }


  updateAide(id:number, aide:Aide){
    return this.http.put(this.url+'/update-Aidee/'+id,aide);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Report } from '../model/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  readonly url="http://localhost:8082/SpringMVC/Report"
  constructor(private http: HttpClient) { }

  getReport(){
    return this.http.get<Report[]>(this.url+'/retrieve-report')
  }
  addReport(report:Report){
    return this.http.post(this.url+'/Add-Report',report)
  }
  deleteReport(id: any) {
    return this.http.delete(this.url+'/removeReport/'+id)
  }

  getReportById(id:number){
    return this.http.get<Report>(this.url+'//retrieve-Report/'+id);
  }


  updateReport(id:number, report:Report){
    return this.http.put(this.url+'/update-Reportt/'+id,report);
  }
  
  getDam(){
    return this.http.get<number>(this.url+'/pc-dam')
  }

  getBad(){
    return this.http.get<number>(this.url+'/pc-bad')
  }
  
  
}

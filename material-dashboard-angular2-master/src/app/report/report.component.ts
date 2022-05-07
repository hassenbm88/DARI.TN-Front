import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../model/report';
import { ReportService } from '../service/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  listReport: Report[];
  public Reports: Report[] = [];
  report: Report;
  dam:number;
  bad:number;
  

constructor(private reportService : ReportService,private route: Router) { }

  ngOnInit(): void {
    this.getReport();
    this.report={
      id:null,
      description:null,
      reason:null,
      confirmation:null
    }
    this.getBad();
    this.getDam();
    }



getReport(){
  this.reportService.getReport().subscribe(
    (data:Report[])=> this.listReport = data
  );
}

addReport(){
  this.route.navigate(['add-report']);
  
}

deleteReport (id: any){
  this.reportService.deleteReport(id).subscribe(()=> this.getReport());
}

updateReport(id:number){
  this.route.navigate(['update-report',id]);
}

getDam(){
  this.reportService.getDam().subscribe(
    (data:number)=> this.dam = data
  );
}

getBad(){
  this.reportService.getBad().subscribe(
    (data:number)=> this.bad = data
  );
}

public searchReport(key: string): void {
  console.log(key);
  const results: Report[] = [];
  for (const Report of this.listReport) {
    if (Report.description.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
      results.push(Report);
    }
  }
  this.listReport = results;
  if (results.length === 0 || !key) {
    this.getReport();
  }
}

}

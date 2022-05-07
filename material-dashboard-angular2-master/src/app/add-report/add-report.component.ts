import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../model/report';
import { ReportService } from '../service/report.service';
@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  report: Report;
  constructor(private reportService : ReportService,private router: Router) { }

  ngOnInit(): void {
    this.report={
      id:null,
      description:null,
      reason:null,
      confirmation:null
    }
  }
  onSubmit(){
    this.reportService.addReport(this.report).subscribe(
      data=>{this.goToReportList();}
    );
    
  }

  goToReportList(){
    this.router.navigate(['report'])
  }
  
  reasons = [    
    "Bad_Language",
    "Proprety_Damage",
  ]
  selected = "----"
  
  update(e){
    this.selected = e.target.value
  }


}

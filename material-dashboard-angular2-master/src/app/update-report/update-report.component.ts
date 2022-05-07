import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from '../model/report';
import { ReportService } from '../service/report.service';
@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {

  id:number;
  report:Report = new Report();

  constructor(private reportService:ReportService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.reportService.getReportById(this.id).subscribe(
      data =>{this.report = data}
    );
    
  }

  onSubmit(){
    //this.report.confirmation=true;
    this.reportService.updateReport(this.id,this.report).subscribe(
      data=>{this.goToReportList();}
    )
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

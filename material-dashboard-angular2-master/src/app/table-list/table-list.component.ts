import { Component, EventEmitter, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { AbonnementService } from 'app/abonnement.service';
import { Abonnement } from 'app/model/abonnement';
import { AppModule  } from '../app.module';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit {

@Output() editEvent = new EventEmitter();  
public listeAbonnement : Abonnement[] = [];



  constructor(private service: AbonnementService,private route: Router) { }

  ngOnInit() {
    this.getAllAbonnement();
  }

  getAllAbonnement(){
    this.service.getAllAbonnement().subscribe(res => {
      this.listeAbonnement = res ;
    });
  }
  

  removeAbonnement(abonnement){
    this.service.removeAbonnement(abonnement.idabonnement).subscribe();
    this.ngOnInit();
  }

  updateAbonnement(abonnement){
    this.editEvent.emit(abonnement);
    this.route.navigateByUrl('/editer/'+Number(abonnement.idabonnement));
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('Liste des Agents.pdf');
    });
}





}

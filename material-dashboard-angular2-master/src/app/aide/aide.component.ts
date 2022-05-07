import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aide } from '../model/Aide';
import { AideService } from '../service/aide.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {

  listAide: Aide[];
  aide: Aide;
  
constructor(private aideService : AideService,private route: Router) { }

  ngOnInit(): void {
    this.getAide();
    this.aide={
      idUser:null,
      monatnt:null,
      periode:null,
      type_aide:null
    }
  }

  getAide(){
    this.aideService.getAide().subscribe(
      (data:Aide[])=> this.listAide = data
    );
  }

  getAideClasse(){
    this.aideService.getAideClasse().subscribe(
      (data:Aide[])=> this.listAide = data
    );
  }

  

  

  addAide(){
    this.route.navigate(['add-aide']);
    
  }

  deleteAide (idUser: any){
    this.aideService.deleteAide(idUser).subscribe(()=> this.getAide());
  }

  updateAide(id:number){
    this.route.navigate(['update-aide',id]);
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
        PDF.save('Liste des Aides.pdf');
    });
}

}

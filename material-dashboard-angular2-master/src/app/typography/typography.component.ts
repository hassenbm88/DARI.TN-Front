import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SousTraitance } from 'app/model/sous-traitance';
import { SousTraitanceService } from 'app/SousTraitance.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ThemeService } from 'app/Theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  @Output() editEvent = new EventEmitter();  
  public listeSoustraitance : SousTraitance[] = [];
  @ViewChild('container', {static: false}) container: ElementRef<HTMLElement>;
  el: HTMLElement;
  
 constructor (private service: SousTraitanceService,private route: Router,private themeService: ThemeService) {}

  ngOnInit() {
    this.getAllSoustraitance();
    this.el = this.container.nativeElement;
  }
  switchTheme() {
    this.el.classList.toggle('dark-theme');
  }

  getAllSoustraitance(){
    this.service.getAllSoustraitance().subscribe(res => {
      this.listeSoustraitance = res ;
    });
  }
  

  removeSoustraitance(SousTraitance){
    this.service.removeSoustraitance(SousTraitance.id_traitance).subscribe();
    this.ngOnInit();
  }

  updateSoustraitance(SousTraitance){
    this.editEvent.emit(SousTraitance);
    this.route.navigateByUrl('/editer2/'+Number(SousTraitance.id_traitance));
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

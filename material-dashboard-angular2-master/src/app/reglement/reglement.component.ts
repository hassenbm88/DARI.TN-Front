import { Component, OnInit } from '@angular/core';
import {Reglement} from './reglement';
import {ReglementService} from './reglement.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reglement',
  templateUrl: './reglement.component.html',
  styleUrls: ['./reglement.component.scss']
})
export class ReglementComponent implements OnInit {


  public ListReglements: Reglement[];
  public editAReglement: Reglement;
  public deleteReglement: Reglement;
  reglement!: Reglement;
  form = false;


  constructor(private reglementService: ReglementService) {}

  ngOnInit() {
    this.getReglements();
    this.reglement = {
      idReglemet: null,
      frais: null,
      localisation: null,
    }

  };

  public getReglements(): void {
    this.reglementService.getReglements().subscribe(
        (response: Reglement[]) => {
          this.ListReglements = response;
          console.log(this.ListReglements);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }


  public searchReglement(key: string): void {
    console.log(key);
    const results: Reglement[] = [];
    for (const Reglement of this.ListReglements) {
      if (Reglement.localisation.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
        results.push(Reglement);
      }
    }
    this.ListReglements = results;
    if (results.length === 0 || !key) {
      this.getReglements();
    }
  }
  public onAddReglement(addForm: NgForm): void {
    document.getElementById('add-agent-form').click();
    this.reglementService.addReglement(addForm.value).subscribe(
        (response: Reglement) => {
          console.log(response);
          this.getReglements();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
    );
  }


  public onUpdateReglement(reglement: Reglement): void {
    this.reglementService.updateReglement(reglement).subscribe(
        (response: Reglement) => {
          console.log(response);
          this.getReglements();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );

    console.log(reglement);
  }

  public onDeleteReglement(reglementId: number): void {
    this.reglementService.deleteReglement(reglementId).subscribe(
        (response: void) => {
          console.log(response);
          this.getReglements();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }



  public onOpenModal(reglement: Reglement, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAgentModal');
    }
    if (mode === 'edit') {
      this.editAReglement = reglement;
      button.setAttribute('data-target', '#updateAgentModal');
    }
    if (mode === 'delete') {
      this.deleteReglement = reglement;
      button.setAttribute('data-target', '#deleteAgentModal');
    }
    container.appendChild(button);
    button.click();
  }


  addReglement(p: any) {
    this.reglementService.addReglement(p).subscribe(() => {
      this.getReglements();
      this.form = false;
    });
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
      PDF.save('Liste des Reglements.pdf');
    });
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}

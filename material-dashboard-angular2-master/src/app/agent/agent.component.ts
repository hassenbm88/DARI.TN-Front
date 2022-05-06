import { Component, OnInit } from '@angular/core';
import {Agent} from './agent';
import {AgentService} from './agent.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  public ListAgents: Agent[];
  public editAgent: Agent;
  public deleteAgent: Agent;
    agent!: Agent;
    form = false;


  constructor(private agentService: AgentService) {}

  ngOnInit() {
    this.getAgents();
    this.agent = {
        idAgent: null,
        name: null,
        last_name: null,
        imageUrl: null,
        mobile: null,
        email: null,

    }

  };

  public getAgents(): void {
    this.agentService.getAgents().subscribe(
        (response: Agent[]) => {
          this.ListAgents = response;
          console.log(this.ListAgents);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }


  public searchAgent(key: string): void {
    console.log(key);
    const results: Agent[] = [];
    for (const Agents of this.ListAgents) {
      if (Agents.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
        results.push(Agents);
      }
    }
    this.ListAgents = results;
    if (results.length === 0 || !key) {
      this.getAgents();
    }
  }
  public onAddAgent(addForm: NgForm): void {
    document.getElementById('add-agent-form').click();
    this.agentService.addAgent(addForm.value).subscribe(
        (response: Agent) => {
          console.log(response);
          this.getAgents();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
    );
  }


  public onUpdateAgent(agent: Agent): void {
    this.agentService.updateAgent(agent).subscribe(
        (response: Agent) => {
          console.log(response);
          this.getAgents();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );

    console.log(agent);
  }

  public onDeleteAgent(agentId: number): void {
    this.agentService.deleteAgent(agentId).subscribe(
        (response: void) => {
          console.log(response);
          this.getAgents();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }



  public onOpenModal(agent: Agent, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAgentModal');
    }
    if (mode === 'edit') {
      this.editAgent = agent;
      button.setAttribute('data-target', '#updateAgentModal');
    }
    if (mode === 'delete') {
      this.deleteAgent = agent;
      button.setAttribute('data-target', '#deleteAgentModal');
    }
    container.appendChild(button);
    button.click();
  }


    addAgent(p: any) {
        this.agentService.addAgent(p).subscribe(() => {
            this.getAgents();
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
            PDF.save('Liste des Agents.pdf');
        });
    }
    closeForm(){

    }
cancel(){
    this.form = false;
}
}

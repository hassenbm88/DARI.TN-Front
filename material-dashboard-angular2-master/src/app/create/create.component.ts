import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbonnementService } from 'app/abonnement.service';
import { Abonnement } from 'app/model/abonnement';
declare var $: any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  abonnement: Abonnement = new Abonnement();
  public abonnementForEdite : Abonnement ;
  public ajoutFormAbonnement : FormGroup ;

  constructor(private abonnementService: AbonnementService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(this.route.url['_value'].length == 2){
      this.getAbonnementById(this.route.url['_value'][1].path);
    }else if (this.route.url['_value'].length == 1){
      this.initForm();
    }
  }

  initForm(abonnement?){
    this.ajoutFormAbonnement = this.fb.group({
    
      amount: [abonnement ? abonnement.amount : ''],
      totalcost: [abonnement ? abonnement.totalcost : ''],
      type_abonnement: [abonnement ? abonnement.type_abonnement : '']
    })
  }
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "Ajout d'abonnement avec succées"

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
  create() {
    this.abonnementService.addAbonnement(this.ajoutFormAbonnement.value).subscribe(() => {
      this.router.navigateByUrl('/table-list');
    });
  }

  updateAbonnement(){
    this.abonnementService.updateAbonnement(this.ajoutFormAbonnement.value,this.abonnementForEdite.idabonnement).subscribe(res => {
      console.log(res); 
      this.router.navigateByUrl('/table-list');
     
    })
  }
  updateAbonnement2(id: number){
      this.router.navigateByUrl('/table-list');
     
  }
  submit(){
    this.abonnementForEdite ? this.updateAbonnement() : this.create() ;
  
  }


  getAbonnementById(id) {
    this.abonnementService.getAbonnement(id).subscribe(abonnement => {
       this.abonnementForEdite = abonnement;
       this.initForm(this.abonnementForEdite);
    })
  }


}
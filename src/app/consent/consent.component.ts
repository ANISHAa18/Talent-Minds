import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent {
  datas: any;
  constructor(private router: Router) { }


  goToMedical() {
  
    this.router.navigate(['/medical']);
  }


  goToConfirm() {


    this.router.navigate(['/confirm']);
  }



}




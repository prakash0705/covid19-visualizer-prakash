import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {Observable} from 'rxjs';
import { async } from '@angular/core/testing';
import { element } from 'protractor';

@Component({
  selector: 'app-statewisedata',
  templateUrl: './statewisedata.component.html',
  styleUrls: ['./statewisedata.component.css']
})
export class StatewisedataComponent implements OnInit {
  stateWiseData:Observable<any>;
  states=[];
  TT="TT"; //To separate total cases 
  i=0
  constructor(private productService:ProductService) { 
    this.stateWiseData=productService.getAllState();
    this.stateWiseData.forEach(element=>{
      console.log(element);
      this.states.push(element.statewise);
      }) 
  }
  
  


  ngOnInit(): void {
  }

}

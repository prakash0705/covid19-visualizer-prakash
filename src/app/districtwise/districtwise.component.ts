import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {Observable} from 'rxjs'



@Component({
  selector: 'app-districtwise',
  templateUrl: './districtwise.component.html',
  styleUrls: ['./districtwise.component.css']
})
export class DistrictwiseComponent implements OnInit {
  districtWiseData:Observable<any>;
  districtWiSeDataList=[];
  constructor(private productService:ProductService) { 
    
  }
  onclick()
  {
    console.log({email:(document.getElementById("email")as HTMLInputElement).value,password:(document.getElementById("password")as HTMLInputElement).value})
  }
  ngOnInit(): void {
  }

}

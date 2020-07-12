import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isButtonVisible:Boolean;
  constructor() {
      if(window.localStorage.getItem("token")!=null)
      {
        this.isButtonVisible=true;
      }
      else
      {
        this.isButtonVisible=false;
      }
   }

   logout()
   {
      window.localStorage.clear();
      window.location.href="";
   }

  ngOnInit(): void {
  }

}

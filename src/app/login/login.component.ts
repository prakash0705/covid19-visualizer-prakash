import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/product.service";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  value=[];
  token;
  
  constructor(private productService:ProductService,private fb: FormBuilder,private router:ActivatedRoute,private toastr: ToastrService) { 
    this.loginForm=this.fb.group({
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",[Validators.required])
    })
    
        
  }
  Login()
  {
    if(this.loginForm.valid)
    {
    this.productService.PostLogin(this.loginForm.value).subscribe((data)=>{
      window.localStorage.setItem("token",JSON.stringify({data}));
      this.toastr.success('Login Success','Welcome',{
        positionClass: 'toast-center-center'} );
          console.log(window.localStorage.getItem("token")!=null) 
          if(window.localStorage.getItem("token")!=null)
          {
            console.log("refer")
            
            window.location.href="";
          }
        })
      }
    
  }

  ngOnInit(): void {
  }

}

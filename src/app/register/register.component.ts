import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/product.service";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  postResult:FormGroup;
  constructor(private productService:ProductService,private fb: FormBuilder,private toastr: ToastrService) {
      this.postResult=this.fb.group({
        firstName:this.fb.control("",[Validators.required,Validators.minLength(3),Validators.max(15)]),
        lastName:this.fb.control("",[Validators.required,Validators.minLength(3),Validators.max(15)]),
        email:this.fb.control("",[Validators.required,Validators.email]),
        password:this.fb.control("",[Validators.required,Validators.minLength(3),Validators.max(15)])
      })
   }
   postSubmit()
   {
    if(this.postResult.valid)
    {    
      console.log({email:(document.getElementById("email")as HTMLInputElement).value,password:(document.getElementById("password")as HTMLInputElement).value})
      this.productService.PostRegister(this.postResult.value).subscribe( 
       (data)=>{
        this.toastr.success('Account Created Successfully');
       this.productService.PostLogin({email:(document.getElementById("email")as HTMLInputElement).value,password:(document.getElementById("password")as HTMLInputElement).value}).subscribe((data)=>{
        window.localStorage.setItem("token",JSON.stringify({data}));
       if(window.localStorage.getItem("token")!=null)
       {
        console.log("success");
       window.location.href="dashboard";
       }
      })
    })
    }
   }

  ngOnInit(): void {
  }

}

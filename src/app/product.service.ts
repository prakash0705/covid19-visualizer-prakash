import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {catchError,tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getRecovered():Observable<any>{
    return this.http.get("https://covid19.mathdro.id/api/countries/india/recovered"
    ).pipe(
      catchError(err=>{
        console.log(err);
        return err;
      })
    )
  }
  getConfirmed():Observable<any>{
    return this.http.get("https://covid19.mathdro.id/api/countries/india/confirmed"
    ).pipe(
      catchError(err=>{
        console.log(err);
        return err;
      })
    )
  }
 
  getInfo():Observable<any>{
    return this.http.get("https://covid19.mathdro.id/api/countries/india"
    ).pipe(catchError(err=>{
      console.log(err);
      return err;
    }))
  }
  getAllState():Observable<any>{
    return this.http.get("https://api.covid19india.org/data.json"
    ).pipe(catchError(err=>{
      console.log(err);
      return err;
    }))
  }
  PostRegister(data):Observable<any>{
    return this.http.post("https://zen-user-api.herokuapp.com/users/register",data
    ).pipe(catchError(err=>{
      console.log(err);
      return err;
    }));
    }
    PostLogin(data):Observable<any>{
      return this.http.post("https://zen-user-api.herokuapp.com/users/authenticate",data
      ).pipe(catchError(err=>{
        console.log(err);
        return err;
      }))
    }
  
}

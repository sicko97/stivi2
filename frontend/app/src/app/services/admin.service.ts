import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getAllPendingEnterprises(){
      return this.http.get('http://localhost:4000/entp/getPending');
  }

  approveEntp(enterprise){
      let data ={
              username:enterprise
      }     
      return this.http.post('http://localhost:4000/entp/approve',data);
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntpServiceService {
  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  register(firstname, lastname, username, password, name, phone, email, logo, pib, entp_num){
    
    const postData = new FormData();
    postData.append("firstname", firstname);
    postData.append("lastname", lastname);
    postData.append("username", username);
    postData.append("password", password);
    postData.append("name", name);
    postData.append("phone", phone);
    postData.append("email", email);
    postData.append("logo", logo, name);
    postData.append("pib", pib);
    postData.append("entp_num", entp_num);

    return this.http.post(`${this.uri}/entp/register`, postData);
  }

  login(username, password){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/entp/login`, data);
  }

  init(entp_id, category, inPDV, code, bank_accounts, storages, registers){

    let data = {
      entp_id: entp_id,
      category: category,
      inPDV: inPDV,
      code: code,
      accounts: bank_accounts,
      storages: storages,
      registers: registers
    }

    return this.http.post(`${this.uri}/entp/init`, data);
  }

  getDetails(pib) {
    return this.http.get(`${this.uri}/entp/getDetails?pib=${pib}`)
  }

  getEnterprises(pib, mypib){
    return this.http.get(`${this.uri}/entp/getEntpByPib?pib=${pib}&mypib=${mypib}`)
  }

  addCollab(mypib, collab_pib, no_days, rabat){
    let data = {
      mypib: mypib,
      collab_pib: collab_pib,
      no_days: no_days,
      rabat: rabat
    }

    return this.http.post(`${this.uri}/entp/addCollab`, data);
  }

  createCategory(name,entp_id){
    let data = {
      name: name,
      entp_id: entp_id,
    }
    return this.http.post(`${this.uri}/entp/createCategory`, data);
  }

 

  getEntpCategories(entp_id){
    return this.http.get(`${this.uri}/entp/getEntpCategories?entp_id=${entp_id}`)
  }
}

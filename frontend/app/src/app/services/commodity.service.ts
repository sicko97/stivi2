import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  uri = 'http://localhost:4000'
  constructor(private http: HttpClient) { }

  getAll(pib){
    let data = {
      pib: pib
    }
    return this.http.post(`${this.uri}/comm/getCommoditiesFromEntp`, data);
  }

  inserCommodity(id, entp_id, name, unit, pdv, status){
    let data = {
      id: id,
      entp_id: entp_id,
      name: name,
      unit: unit,
      pdv: pdv,
      status: status
    }

    return this.http.post(`${this.uri}/comm/insertCommodity`, data);
  }

  addToCategory(name,entp_id, comm_id){
    let data = {
      name: name,
      entp_id: entp_id,
      comm_id: comm_id
    }

    return this.http.post(`${this.uri}/entp/addToCategory`, data)
  }
}

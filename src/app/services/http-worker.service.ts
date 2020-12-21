import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyWorker} from "../shared/worker.model";

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {
  routeApi = 'http://localhost:3000/workers';
  constructor(private http:HttpClient) { }
  getWorker():Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }
  postWorker(data:MyWorker){
    return this.http.post(this.routeApi, data).toPromise();
  }
  editWorker(data:MyWorker){
    return this.http.put(this.routeApi+`/${data.id}`, data).toPromise();
  }
  deleteWorker(id:number){
    return this.http.delete(this.routeApi+`/${id}`).toPromise();
  }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class RouteService {
    private data = new BehaviorSubject<any>(null);
    constructor(){}

    public setData(data: any){
        this.data.next(data)
    }
    public getData(){
        return this.data.asObservable()
    }
}
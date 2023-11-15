import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'modal-login',
    templateUrl: './modal-login.html',
    styleUrls: ['./modal-login.css']
})

export class ModalLoginComponent implements OnInit {
    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
        
    }

    public mudarTela(){
        this.router.navigate(['/home'])
    }
}
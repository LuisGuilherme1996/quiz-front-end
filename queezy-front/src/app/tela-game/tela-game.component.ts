import { Component, OnInit } from '@angular/core';
import { Games } from './model/tela-game-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-game',
  templateUrl: './tela-game.component.html',
  styleUrls: ['./tela-game.component.css']
})
export class TelaGameComponent implements OnInit{
  constructor(
    private router: Router
  ){}
  public games: Games[] = [
    {
      key: '1',
      name: 'John Brown',
      url: 'New York No. 1 Lake Park',
      restarOnError: true
    },
    {
      key: '2',
      name: 'Jim Green',
      url: 'London No. 1 Lake Park',
      restarOnError: false
    },
    {
      key: '3',
      name: 'Joe Black',
      url: 'Sidney No. 1 Lake Park',
      restarOnError: false
    }
  ];
  
  public menu = [{
    teste: 1,
    teste2: 2,
    teste3: 3,
  }]
  ngOnInit(): void {
    
  }
  log(event){
    console.log(event)
  }
  voltarTela(){
    this.router.navigate(['home'])
  }
  // document.addEventListener('DOMContentLoaded', function () {
  //   var dropdownButton = document.getElementById('dropdownMenu2');
  //   var dropdownModal = new bootstrap.Modal(document.getElementById('customModal'));
  
  //   dropdownButton.addEventListener('click', function () {
  //     dropdownModal.show();
  //   });
  // });
  
}
